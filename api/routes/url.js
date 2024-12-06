const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const { getLinks, createLinks } = require("../controllers/urlInfoController");

// router.route("/").get(getLinks).post(verifyToken, createLinks);

router.get("/:userNameId", getLinks);

router.post("/", verifyToken, createLinks);

// For Example

// router.put("/:id", verifyToken, updateSingleLink);

// router.delete("/:id", verifyToken, deleteSingleLink);

module.exports = router;
