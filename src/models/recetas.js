import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
  nombreReceta: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 500,
  },

});

const Receta = mongoose.model("receta", colorSchema);
export default Receta

