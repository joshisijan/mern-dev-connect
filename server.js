const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//Connect to MonngoDB
const uri = require("./config/keys").mongoURI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  console.log(err);
});

app.get("/", (req, res) => res.send("Hello!"));

//Use Routes

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.POST || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
