// express のフレームワークを使用する準備
const express = require("express");
// アプリケーションとして使用できるように app で express を宣言
const app = express();
// mongoose を使用
const mongoose = require("mongoose");

const foodRouter = require("./routes/userRoutes");

app.use(foodRouter);

// データベース接続
mongoose
  .connect("mongodb+srv://takataka521monatsu7191820:jE6Ct49xWwcrC6eE@cluster0.ht416.mongodb.net/User?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("データベース接続に成功しました"))
  .catch((err) => console.log(err));

// ローカルサーバーの設定
app.listen(3000, () => {
  console.log("サーバーが起動しました");
});