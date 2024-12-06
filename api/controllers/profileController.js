const prisma = require("../lib/prisma");

const updateProfileInfo = async (req, res) => {
  const { bio, profilePic } = req.body;

  console.log(bio, profilePic);

  const userId = req.userId;

  if (!bio) {
    return res.status(400).json({ message: "Please Write the Bio" });
  }

  try {
    const profile = await prisma.user.update({
      where: { id: userId },
      data: {
        profile: {
          update: { bio, profilePic },
        },
      },

      select: {
        userName: true,
        profile: {
          select: { bio: true, profilePic: true },
        },
      },
    });

    res.status(200).json(profile);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

// read profile Info Data by params in the Url
const getProfileInfo = async (req, res) => {
  const { userNameId } = req.params;

  try {
    const profile = await prisma.user.findUnique({
      where: { userName: userNameId },
      select: {
        userName: true,
        profile: {
          select: { bio: true, profilePic: true, theme: true },
        },
      },
    });

    console.log(profile);

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: "there is Error Please Try Again" });
  }
};

const getProfileInfoData = async (req, res) => {
  const userId = req.userId;

  try {
    const profile = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        userName: true,
        profile: {
          select: { bio: true, profilePic: true, theme: true },
        },
      },
    });

    console.log(profile);

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: "there is Error Please Try Again" });
  }
};

const updateProfileTheme = async (req, res) => {
  const { theme } = req.body;

  const userId = req.userId;

  try {
    const profile = await prisma.user.update({
      where: { id: userId },
      data: {
        profile: {
          update: { theme },
        },
      },

      select: {
        userName: true,
        profile: {
          select: { theme: true },
        },
      },
    });

    res.status(200).json(profile);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  updateProfileInfo,
  getProfileInfo,
  getProfileInfoData,
  updateProfileTheme,
};
