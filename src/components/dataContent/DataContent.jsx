import './DataContent.css';
import pedirProductos from './pedirProductos';
import { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList'

const DataContent = () => {
    const [productos, setProductos] = useState([])


    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res)
            })
    }, [])

    return(
        <div>
            <ItemList productos={productos}/>
        </div>
    );
};

export default DataContent;