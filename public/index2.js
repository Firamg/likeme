//IMPORT EXPRESS & ROUTER APP

const express=require('express')
const { json } = require('express/lib/response')
const app=express()

//IMPORT NODE

const fs=require('fs')
const { stringify } = require('querystring')

//UPLOAD SERVER

app.listen(3000,console.log("¡Servidor Encendido!"))

//Midleware

app.use(express.json())

//GET

app.get("/canciones",(req,res)=>{
    const canciones=JSON.parse(fs.readFileSync("repertorio.json"))
    res.json(canciones)
})

//POST

app.post("/canciones",(req,res)=>{
    const cancion=req.body
    const canciones=JSON.parse(fs.readFileSync("repertorio.json"))
    canciones.push(cancion)
    fs.writeFileSync("repertorio.json",JSON.stringify(canciones))
    res.send("Canción Guardada con éxito")
})

//DELETE
app.delete("/canciones/:id",(req,res)=>{
    const {id}=req.params
    const canciones=JSON.parse(fs.readFileSync("repertorio.json"))
    const index=canciones.findIndex(p=>p.id==id)
    canciones.splice(index,1)
    fs.writeFileSync("repertorio.json",JSON.stringify(canciones))
    res.send("Canción eliminada con éxito")

})

//MODIFY

app.put("/canciones/:id",(req,res)=>{
    const {id}=req.params
    const cancion=req.body
    const canciones=JSON.parse(fs.readFileSync("repertorio.json"))
    const index=canciones.findIndex(p=>p.id==id)
    canciones[index]=cancion
    fs.writeFileSync("repertorio.json",JSON.stringify(canciones))
    res.send("Canción modificada con éxito")
})

//RETURN HTML

app.get("/", (req, res) => {
    res.sendFile("/Users/felixramirez/Desktop/desafiopc/index.html")
    })