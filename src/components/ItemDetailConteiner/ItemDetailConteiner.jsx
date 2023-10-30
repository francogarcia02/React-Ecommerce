import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { pedirItemPorId } from '../../helpers/pedirProductos'


const ItemDetailContainer = () => {
    const id = useParams().id
    const [item, setItem] = useState(null)

    useEffect(()=>{
        pedirItemPorId(Number(id))
            .then((res) => {
                setItem(res)
            })
    },[id])

    return(
        <div className="Justifier">
            {item && <ItemDetail prod={item}/>}
        </div>
    )

}

export default ItemDetailContainer