const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/, "8~16字以内で半角数字、半角英字がそれぞれ一文字以上使用してください。"],
  },
});

// どこのファイルでも使用できるようにエクスポートする
const User = mongoose.model("User", UserSchema);
module.exports = User;