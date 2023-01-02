//INSTANCIA FILES FROM PG

const {Pool}=require('pg')

const pool=new Pool({
    host:'localhost',
    user:'postgres',
    password:'1234',
    database:'likeme',
    allowExitOnIdle:true
})

//OBTENER REGISTROS DE TABLA

const obtenerRegistros=async()=>{
    const {rows}= await pool.query("SELECT * FROM posts")
    console.log(rows)
    return rows

}

const postRegistro=async(titulo,img,descripcion,likes)=>{
    const consulta="INSERT INTO posts VALUES(DEFAULT,$1,$2,$3,$4)"
    const values=[titulo,img,descripcion,likes]
    const result=await pool.query(consulta,values)
    console.log('Registro Agregado con Éxito')
}

module.exports= {obtenerRegistros,postRegistro}

//--PRUEBA

/* const posts=async()=>{
    try{
        const result=await pool.query("SELECT NOW()");
        console.log(result);
    } catch(e){
        console.log("error")
    }
};

posts() */