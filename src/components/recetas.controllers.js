import Receta from "../models/recetas";


export const listarReceta = async (req, res) => {
  try {
    const listaReceta = await Receta.find();
    res.status(200).json(listaReceta);
  } catch (error) {
    console.log(error);
  }
};

export const crearReceta = async (req, res) => {
  try {
    console.log(req.body);
    const recetaNueva = new Receta(req.body);
    await recetaNueva.save();
    res.status(201).json({
      mensaje: "La receta se agrego correctamente",
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "La receta no se pudo agregar",
    });
    console.log(error);
  }
};

export const obtenerReceta= async (req, res) => {
  try {
    console.log(req.body);
    const recetaBuscada = await Receta.findById(req.params.id);
    res.status(201).json(recetaBuscada);
  } catch (error) {
    res.status(404).json({
      mensaje: "Error no se encontro La receta buscado",
    });
    console.log(error);
  }
};
export const editarReceta= async (req, res) => {
  try {
    await Receta.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "La receta se edito satisfactoriamente",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error no se pudo editar La receta deseado",
    });
    console.log(error);
  }
};
export const borrarReceta = async (req, res) => {
  try {
    await Receta.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "La receta se elimino satisfactoriamente",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error no se pudo borrar La receta deseado",
    });
    console.log(error);
  }
};
