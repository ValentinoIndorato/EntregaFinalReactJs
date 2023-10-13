import { useContext } from "react"
import { CartContext } from "./Context/CartContext"
function ItemCart({item}){
    const{totalPrice}= useContext(CartContext)
    return(
        <>
        <ul className="itemCart">
            <li>{item.title } </li>
            <li>{item.title } </li>
            <img src={item.img}/>
        </ul>
        </>
    )

}
export default ItemCart