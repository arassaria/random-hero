require("dotenv").config();

const express = require("express");
const path = require("path");
const { connectToDb } = require("./lib/database");
const { getCollection } = require("./lib/serverMethods");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get("/api/overwatch", async (req, res, next) => {
  try {
    const { role } = req.query;
    const heroes = await getCollection({ collectionName: "overwatch", role });
    res.send(heroes);
  } catch (error) {
    next(new Error(error));
  }
});

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.use((error, req, res, next) => {
  res.json({
    message: "An unexpected server error occured. Please try again later.",
  });
});

async function run() {
  console.log("Connecting to Database...");
  await connectToDb({ url: process.env.DB_URI, dbName: process.env.DB_NAME });
  console.log("Connected to Database");

  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

run();
