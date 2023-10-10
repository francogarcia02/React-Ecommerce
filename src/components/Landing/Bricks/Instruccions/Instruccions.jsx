import './Instruccions.css'

const Instruccions = () =>{
    return(
        <div class="funcionalidad">
            <h2 class="funcionalidad__item">Prodecimiento para ordenar tu menu ideal</h2>
            <div class="funcionalidad__row">
                <div>
                    <h4 class="funcionalidad__row__item">Primer paso</h4>
                    <h5 class="funcionalidad__row__item__text">Registrate o inicia sesion</h5>
                </div>
                <div>
                    <h4 class="funcionalidad__row__item">Segundo paso</h4>
                    <h5 class="funcionalidad__row__item__text">Ordena tu pedido en el menu</h5>
                </div>
                <div>
                    <h4 class="funcionalidad__row__item">Tercer paso</h4>
                    <h5 class="funcionalidad__row__item__text">Paga la cuenta en el carrito y dirigete a nuestra sucursal con el ticket para retirar</h5>
                </div>
            </div>
        </div>
    )
}

export default Instruccions