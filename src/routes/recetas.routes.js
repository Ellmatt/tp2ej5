import { Router } from "express";
import { borrarReceta
    , crearReceta
    , editarReceta
    , listarReceta
    , obtenerReceta
 } from "../components/recetas.controllers";


const router=Router()

router.route('/recetas')
.get(listarReceta)
.post(crearReceta)

router.route('/recetas/:id')
.get(obtenerReceta)
.put(editarReceta)
.delete(borrarReceta)


export default router