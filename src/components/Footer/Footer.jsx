import './Footer.css'

const Footer = () =>{
    return(
        <footer className="footer-class">
            <div className="contacto-atencion">
                <h4 className="contacto__titulo">Atencion al cliente</h4>
                <h5 className="contacto__item">+54 9 351 222 2233</h5>
                <h5 className="contacto__item">MegaBurguers@gmail.com</h5>
            </div>
            <div className="contacto-franquicia">
                <h4 className="contacto__titulo">¡Conviertete en franquicia!</h4>
                <h5 className="contacto__item">MegaFranquicias@gmail.com</h5>
            </div>
            <div className="redes">
                <h4 className="contacto__titulo" >Nuestras redes</h4>
                <div className="redes__contenedor">
                    <a href=""><img className="redes__logo" src="../../../assets/img/logos/instagram.png"/></a>
                    <a href=""><img className="redes__logo" src="../../../assets/img/logos/facebook.png"/></a>
                    <a href=""><img className="redes__logo" src="../../../assets/img/logos/twitter.png"/></a>
                </div>
            </div>
            <div className="whatsapp">
                <a href="https://wa.me/3512290552"><img class="whatsapp_logo" src="../../../assets/img/logos/whatsapp.png"/></a>
            </div>
        </footer>
    )
}

export default Footer