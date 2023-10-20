import './DataContent.css';
import { pedirProductos } from '../../helpers/pedirProductos';
import { toCapital } from '../../helpers/toCapital';
import { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList'
import { useParams, Link } from 'react-router-dom'

const DataContent = () => {
    const [productos, setProductos] = useState([])
    const [titulo, setTitulo] = useState("Productos")
    const categoria = useParams().categoria
    console.log(categoria)

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                if(categoria){
                    setProductos( res.filter((prod)=>prod.category === categoria ))
                    setTitulo(toCapital(categoria))
                }
                else{
                    setProductos(res)
                    setTitulo('Productos')
                }

            })
    }, [categoria])

    return(
        <div>
            <div className='menu__categories'>
                <Link to='/menu'>Todos</Link>
                <Link to='/menu/pc'>Computadoras</Link>
                <Link to='/menu/smartphone'>Celulares</Link>
                <Link to='/menu/smart-tv'>Televisores</Link>
            </div>
            <ItemList productos={productos} titulo={titulo}/>
        </div>
    );
};

export default DataContent;