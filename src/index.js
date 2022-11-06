import express from "express"
import morgan from "morgan"
import cors from "cors"
import path from "path"
import "./database"
import router from './routes/recetas.routes'

const app = express()

app.set('puerto', process.env.PORT || 4000)

app.listen(app.get('puerto'), ()=>{
    console.log('Estoy en el puerto '+ app.get('puerto'))
})

app.use(morgan('dev'))

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended:true}))


app.use(express.static(path.join(__dirname,'../public')))

app.use('/apiReceta', router)