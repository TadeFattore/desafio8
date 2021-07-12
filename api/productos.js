let db = [

]

class Productos{
    constructor(productos){
        this.productos = productos;
    }
    guardar(title,price,thumbnail){
        const arr = this.productos;
        let newProduct = {
            title: title,
            price: price,
            thumbnail: thumbnail
        }
        newProduct.id = arr.length + 1;
        arr.push(newProduct);
        return newProduct;
    }
    leer(){
        return this.productos;
    }
}

const productos = new Productos(db);
module.exports = productos;