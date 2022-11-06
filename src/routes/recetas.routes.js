import { Router } from "express";
import { borrarReceta
    , crearReceta
    , editarReceta
    , listarReceta
    , obtenerReceta
 } from "../components/recetas.controllers";


const router=Router()

router.route('/colores')
.get(listarReceta)
.post(crearReceta)

router.route('/colores/:id')
.get(obtenerReceta)
.put(editarReceta)
.delete(borrarReceta)


export default router