import { useContext } from "react"
import { CartContext } from "./Context/CartContext"
function ItemCart({item}){
    const{totalPrice}= useContext(CartContext)
    return(
        
        <div className="itemCart">
            <div><img src={item.img}/></div>
            <ul><span></span>
            <li className="titleCart">{item.title } </li>
            <li><span>Descripción:</span> {item.SmallDescription } </li>
            <li><span>Cantidad a comprar:</span> {item.stock } </li>
            <li><span>Precio unitario:</span> ${item.Precio} </li>
            <li><span>Precio por cantidad:</span> ${item.Precio * item.stock} </li>   
            Agregar botones de agregar y eliminar 
            </ul>        
        </div>
        
    )

}
export default ItemCart