// const router = require("./controllers");
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "..", "darbapp", "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use("/api", router);

// if (process.env.NODE_ENV === "production") {
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
  // res.sendFile(path.join(__dirname, "..", "darbapp", "build", "index.html"));
});
// }

module.exports = app;
