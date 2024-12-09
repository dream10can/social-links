const prisma = require("../lib/prisma.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { userName, email, password } = req.body;

  //check if client write his full information
  if (!userName || !email || !password) {
    return res.status(400).json({
      message: "Invalid Credential Please Write Your information",
    });
  }

  try {
    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    const splitEmail = email.split("@");

    const startEmail = splitEmail[0].toString();

    //check if userName Available in database
    const hasUserName = await prisma.user.findMany({
      where: {
        OR: [
          {
            userName: {
              contains: userName.toString(),
            },
          },
          {
            email: {
              contains: startEmail,
            },
          },
        ],
      },
    });

    console.log(hasUserName);

    if (Array.isArray(hasUserName) && !hasUserName.length == 0) {
      return res
        .status(400)
        .json({ message: "Creadential already Register Please Sign In" });
    }

    // create the user in database
    const newUser = await prisma.user.create({
      data: {
        userName,
        email,
        password: hashPassword,

        profile: {
          create: { bio: "", profilePic: "" },
        },
      },
    });

    console.log(newUser);

    res.status(201).json({ message: "created" });
  } catch (error) {
    res.status(500).json({ message: "Failed To Create User" });
  }
};

const login = async (req, res) => {
  let { userName, password } = req.body;

  try {
    userName = userName[0].toLowerCase() + userName.slice(1);

    //check if client write userName or password
    if (!userName || !password) {
      return res
        .status(400)
        .json({ message: "Please Write userName also Password" });
    }
    //check if UserName Available in database
    const user = await prisma.user.findUnique({ where: { userName } });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Credentials ",
      });
    }

    //check if password match the requist Password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ message: "Invalid Credential Please Write correct password" });
    }

    // GENERATE COOKIE TOKEN AND SEND TO THE USER
    const expireDate = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: expireDate,
    });

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: expireDate,
      })
      .status(200)
      .json({ message: "created", userInfo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logOut = async (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};

module.exports = { register, login, logOut };
