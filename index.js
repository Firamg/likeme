//IMPORT FROM POSTS
const {obtenerRegistros,postRegistro}=require("./funciones");

//IMPORT EXPRESS

const express=require('express');
const app=express();

//ENCENDER SERVIDOR

app.listen(3000,console.log("Servidor Encendido - Index.js"));

//IMPORT CORS

const cors=require('cors');
const { Pool } = require("pg/lib");

//IMPORT OTHERS

app.use(express.json());
app.use(cors());
app.use(express.static('public'))

//RETURN FILE FROM EXPRESS

app.get("/", (req, res) => {

    try{
        res.sendFile(__dirname+"/public/index.html")
    }catch(e){
        console.log("error")
    }
    
    })

app.get("/posts",async(req,res)=>{
    try{
        const posts = await obtenerRegistros()
    res.json(posts)

    }catch(e){
        console.log("error")
    }
    

})

app.post("/posts",async(req,res)=>{
    const {titulo,img,descripcion,likes}= req.body
    await postRegistro(titulo,img,descripcion,likes)
    res.send("Registro Agreagdo")
})

//https://robohash.org/1