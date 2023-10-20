import './ItemList.css'

import Item from './Item/Item'

const ItemList = ({productos}) =>{
    return(
    <div className="contMenu">
        <h1 className="menu__title">Productos</h1>
        {productos && productos.map(prod => (
            <Item prod={prod}/>
        ))}
    </div>
    )
}

export default ItemList