import { useContext } from "react"
import { CartContext } from "./Context/CartContext"
function ItemCart({item}){
    const{totalPrice}= useContext(CartContext)
    return(
        <>
        <ul className="itemCart">
            <li className="titleCart">{item.title } </li>
            <li>Descripción: {item.SmallDescription } </li>
            <li>Cantidad a comprar: {item.stock } </li>
            <li>Precio unitario: ${item.Precio} </li>
            <li>Precio por cantidad: ${item.Precio * item.stock} </li>
            <img src={item.img}/>
        </ul>
        </>
    )

}
export default ItemCart