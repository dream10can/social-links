const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      // "https://social-links-nu-flame.vercel.app",
      "https://social-links-api.vercel.app",
    ],
    methods: ["POST", "GET", "PUT"],
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

app.use("/api/urlInfo", require("./routes/url"));

app.use("/api/auth", require("./routes/auth"));

app.use("/api/profileInfo", require("./routes/user"));

app.listen(5000, () => {
  console.log("server Start");
});
