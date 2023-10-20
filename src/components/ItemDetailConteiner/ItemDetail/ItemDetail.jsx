import './ItemDetail.css';

const ItemDetail = ({prod}) =>{
    return(

        <div className="contMenu">
            <h1 className="menu__title">{prod.name}</h1>
            <div key={prod.id} className="card">
                <img className="card__img" src={process.env.PUBLIC_URL + prod.img} alt={prod.name}/>
                <div className="card__detail">
                    <h3 className="card__detail__item" >{prod.name}</h3>
                    <h4 className="card__detail__item" >${prod.price}</h4>
                    <p className="card__detail__item" >{prod.desc}</p>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail