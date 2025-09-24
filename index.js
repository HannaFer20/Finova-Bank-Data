const express = require ('express')
const mysql = require ('mysql')
const bodyParser = require ('body-parser')
const { server } = require('typescript')

const app = express ()
 
app.use(function(req, res, next) {
    res.setHeader ('Access-Control-Allow-Origin', '*')
    res.setHeader ('Access-Control-Allow-Methods',)
    next()
})

app.use(bodyParser.json())

const puerto = 3000
const conexion = mysql.createConnection(
    {
        database: '',
        host:'',
        port:'',
        user:'',
        password:'', 
    }
)

app.listen(puerto,() => {
    console.log('Servidor corriendo en el puerto:', {puerto})
})

conexion.connect(error => {
    if (error) throw error
    console.log('Conexion exitosa a la base de datos');

})

app.get('/', (req, res) =>{
    res.send('API')
})