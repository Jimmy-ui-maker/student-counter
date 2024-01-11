import mongoose, { Schema, model, models } from "mongoose";

mongoose.connect(process.env.MONGODB_URL);
mongoose.Promise = global.Promise;

const levelOneSchema = new Schema({
  fullnames: {
    type: String,
    required: true,
  },
  matric: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const levelTwoSchema = new Schema({
  fullnames: {
    type: String,
    required: true,
  },
  matric: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const levelThreeSchema = new Schema({
  fullnames: {
    type: String,
    required: true,
  },
  matric: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const levelFourSchema = new Schema({
  fullnames: {
    type: String,
    required: true,
  },
  matric: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;

export const LevelOne = models.LevelOne || model("LevelOne", levelOneSchema);
export const LevelTwo = models.LevelTwo || model("LevelTwo", levelTwoSchema);
export const LevelThree = models.LevelThree || model("LevelThree", levelThreeSchema);
export const LevelFour = models.LevelFour || model("LevelFour", levelFourSchema);

//export const Product = models.Product || model("Product", productSchema);
