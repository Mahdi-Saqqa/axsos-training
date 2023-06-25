const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required:[true,"title is required"],
      minLength:[2,"title needs to be at least 10 charecter"]
    },
    price:{
      type: Number, 
      required: [true, "Please Place a Price"], 
      min: [1], 
    },
    description: {
      type: String,
      required:[true,"descreption is required"],
      minLength:[3,"descreption needs to be at least 3 charecter"]
    },
  },
  {
    timestamps: true,
  }
);

module.exports.Product=mongoose.model("Product", ProductsSchema);;
