import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
  nombreReceta: {
    type: String,
    // required: true,
    minLength: 2,
    maxLength: 500,
  },
  precio:{
    type: Number,
    required: true,
    minLength: 1,
    maxLength: 10000,
  },
  imagen:{
    type: String,
    required: true,
  },
  categoria:{
    type: String,
    required: true,
  },
  descripcion:{
    type: String,
    required: true,
  }

});

const Receta = mongoose.model("receta", recetaSchema);
export default Receta

