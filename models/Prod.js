import mongoose from "mongoose";
const ProdSchema = new mongoose.Schema({
  prod_name: {
    type: String,
  },
  prod_type: {
    typ: String,
  },
  prod_nbr: {
    typ: Number,
  },
  prod_price: {
    typ: Number,
  },
});

module.exports.Prod = mongoose.model("Prod", ProdSchema);
