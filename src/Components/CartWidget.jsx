import { useContext } from "react"
import { CartContext } from "./Context/CartContext" 
function CartWidget(){
    const {totalProducts, cart} =useContext(CartContext)
    return( 
    <>
    <span>{totalProducts() ||cart}</span>
    <img src="https://ik.imagekit.io/vaip/img/plasticBag.svg?updatedAt=1697220365702" />    
    </>)
}
export default CartWidget