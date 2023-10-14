import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="NabVar">
            <ul> 
                <li ><Link to="/" className="MercadoNorte">Mercado Norte</Link></li>
                <li><Link to="/category/Bebidas">Bebidas e infuciones</Link></li>
                <li><Link to="/category/Fiambres">Fiambres</Link></li>
                <li><Link to="/category/Quesos">Quesos</Link> </li>                
            </ul>
            <div className="CartNav" ><Link to="/cart" ><CartWidget /></Link> </div>
        </nav>
    )
}
export default NavBar