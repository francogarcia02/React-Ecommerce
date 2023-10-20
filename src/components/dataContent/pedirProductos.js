import data from "../../data/productos.json";

const pedirProductos = () => {
    return new Promise ((resolve, reject) => {
        resolve(data)
    });
};

export default pedirProductos