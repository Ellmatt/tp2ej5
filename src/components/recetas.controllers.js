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
    const recetaNueva = new Color(req.body);
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
    const colorBuscado = await Color.findById(req.params.id);
    res.status(201).json(colorBuscado);
  } catch (error) {
    res.status(404).json({
      mensaje: "Error no se encontro el color buscado",
    });
    console.log(error);
  }
};
export const editarReceta= async (req, res) => {
  try {
    await Color.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El color se edito satisfactoriamente",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error no se pudo editar el color deseado",
    });
    console.log(error);
  }
};
export const borrarReceta = async (req, res) => {
  try {
    await Color.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El color se elimino satisfactoriamente",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error no se pudo borrar el color deseado",
    });
    console.log(error);
  }
};
