import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"

function NavBar(){
return (
    <ul> <Link to="/">Mercado Norte</Link>        
        <li><Link to="/category/Bebidas">Bebidas e infuciones</Link></li>        
        <li><Link to="/category/Fiambres">Fiambres</Link></li>             
        <li><Link to="/category/Quesos">Quesos</Link> </li>
        <li><Link to="/cart"><CartWidget/></Link> </li>
       
    </ul>
)
}
export default NavBar