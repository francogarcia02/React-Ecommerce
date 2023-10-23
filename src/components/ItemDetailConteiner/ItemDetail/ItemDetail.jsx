import './ItemDetail.css';

const ItemDetail = ({prod}) =>{
    return(

        <div className="detail__contMenu">
            <h3 className="menu__title">Categoria: {prod.category}</h3>
            <div key={prod.id} className="detail__card">
                <img className="card__detail__img" src={prod.img} alt={prod.name}/>
                <div className="card__detail">
                    <h3 className="card__detail__item detail__title" >{prod.name}</h3>
                    <h2 className="card__detail__item detail__price" >${prod.price}</h2>
                    <div className="item__caract">
                        <h5>Caracteristicas</h5>
                        <p className="caract">{prod.caract1}</p>
                        <p className="caract">{prod.caract2}</p>
                        <p className="caract">{prod.caract3}</p>
                        <p className="caract">{prod.caract4}</p>
                    </div>
                </div>
                <div className="detail__buttons">
                    <button className="detail__button-comprar">Comprar ahora</button>
                    <button className="detail__button-carrito">Añadir al carrito</button>
                </div>

            </div>
        </div>

    )
}

export default ItemDetail