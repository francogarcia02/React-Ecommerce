import './DataContent.css';
import data from "../../data/productos.json";
import { useState, useEffect } from 'react';

const DataContent = () => {
    const [productos, setProductos] = useState([])
    const pedirProductos = () => {
        return new Promise ((resolve, reject) => {
            resolve(data)
        });
    };

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res)
            })
    }, [])

    return(
        <div className="contMenu">
            <h1 className="menu__title">Productos</h1>
            {productos.length > 0 && productos.map(prod => (
                console.log(prod.img),
                <div className="card">
                    <img className="card__img" src={process.env.PUBLIC_URL + prod.img} alt={prod.name}/>
                    <div className="card__content">
                        <h3 className="card__content__item" >{prod.name}</h3>
                        <h4 className="card__content__item" >${prod.price}</h4>
                        <p className="card__content__item" >{prod.desc}</p>
                        <button className="card__content__button" id="${id}">Añadir al pedido</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DataContent;