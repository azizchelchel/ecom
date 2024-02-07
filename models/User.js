import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  tel: {
    type: String,
  },
});

export const User = mongoose.model("User", UserSchema);
