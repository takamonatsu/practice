const express = require("express");
const app = express();
const userModel = require("../models/User");

// データの取得
app.get("/users", async(req, res) => {
  // データベースの中のデータを全て返す
  const users = await userModel.find({});

  try {
    res.send(users);
  } catch (err) {
    res.status(500).send(err)
  }
});

// データの作成
app.post("/user", async(req, res) => {
  // データベースの中のデータを全て返す
  const user = new userModel(req.body);

  try {
    await user.sava();
    res.send(user);
  } catch (err) {
    res.status(500).send(err)
  }
});

module.exports = app;