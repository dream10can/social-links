const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  // check if token Available in the request
  if (!token) {
    return res.status(403).json({ message: "Not Authenticated!" });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      res.status(401).json({ message: "Token is Not Valid" });
    }

    req.userId = decoded.id;

    next();
  });
};

module.exports = verifyToken;
