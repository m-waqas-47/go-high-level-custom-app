const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 3005;
const app = express();

app.use(
  cors({
    origin: "*",
    // methods: "GET,POST,PUT,DELETE",
    // credentials:true,
    // optionSuccessStatus:200,
  })
);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/initiate", require("./lib/initiate"));

app.get("/refresh", require("./lib/refresh"));

app.get("/oauth/callback", require("./lib/callback"));

app.post("/webhook", async (req, res) => {
  console.log(req.body, "webhook catch response");
});

app.use("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Server Running");
});

app.listen(port, () => {
  console.log(`App Listening on ${port} !`);
});
