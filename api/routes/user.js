const express = require("express");
const {
  updateProfileInfo,
  getProfileInfo,
  updateProfileTheme,
  getProfileInfoData,
} = require("../controllers/profileController");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.get("/:userNameId", getProfileInfo);
router.get("/", verifyToken, getProfileInfoData);
router.put("/", verifyToken, updateProfileInfo);
router.put("/updateTheme", verifyToken, updateProfileTheme);

module.exports = router;
