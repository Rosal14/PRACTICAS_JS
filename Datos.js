const express=require('express');
const app=express();
const puerto=3000;
app.get('/', (req,res)=>{
    res.send('Nombre: Rosalia Desena Lee --- Carrera: ISC --- Edad:21');
});
app.listen(puerto,()=>{
    console.log(`servidor corriendo en http://localhost:${puerto}`)
});