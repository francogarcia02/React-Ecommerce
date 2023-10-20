import data from "../data/productos.json";

export const pedirProductos = () => {
    return new Promise ((resolve, reject) => {
        resolve(data)
    });
};

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {

        const item = data.find((el) => el.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }

    })
}
