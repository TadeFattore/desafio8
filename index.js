const express = require('express');
const productos = require('./api/productos.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let PORT = 8080;

app.get('/api/productos/listar', (req, res) => {
    res.send((productos.leer().length !==0)? productos.leer() : {error:'no hay productos cargados'});
});

app.get('/api/productos/listar/:id', (req, res) => {
    let producto = productos.leer()[req.params.id];
    res.send((productos.leer().length - 1 >= parseInt(req.params.id))
    ? producto : {error: 'producto no encontrado'});
});

app.post('/api/productos/guardar', (req, res) =>{
    let title = req.body.nuevoProducto.title
    let price = req.body.nuevoProducto.price
    let thumbnail = req.body.nuevoProducto.thumbnail
    let nuevoProducto = productos.guardar(title,price,thumbnail)
    res.send(nuevoProducto)
});

const server = app.listen(PORT, () => (
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
));

server.on('error', error => console.log(error));