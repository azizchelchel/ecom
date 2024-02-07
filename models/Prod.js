import mongoose from "mongoose";
const ProdSchema = new mongoose.Schema({
  prod_id: {
    type: String,
  },
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
export const Prod = mongoose.model("Prod", ProdSchema);
