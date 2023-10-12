import { useContext } from "react"
import { CartContext } from "./Context/CartContext" 
function CartWidget(){
    const {totalProducts, cart} =useContext(CartContext)
    return( <><p>{totalProducts() ||cart}</p>
    <p>asdasd</p></>)
}
export default CartWidget