const express = require('express')
const bp = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose");
const userModel = require("./model");

const PORT = process.env.PORT || 3000;
const app = express()
app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/usersdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.post("/user-details", async (request, response) => {
  const user = new userModel(request.body);
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
