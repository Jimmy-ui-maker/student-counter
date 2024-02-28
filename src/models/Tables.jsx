import mongoose, { Schema, model, models } from "mongoose";

mongoose.connect(process.env.MONGODB_URL);
mongoose.Promise = global.Promise;

const AllLevelSchema = new Schema({
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
    enum: ["100L", "200L", "300L", "400L"],
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



export const AllLevelTable =
  models.AllLevelTable || model("AllLevelTable", AllLevelSchema);

//export const Product = models.Product || model("Product", productSchema);
