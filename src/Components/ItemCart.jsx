import { useContext } from "react"
import { CartContext } from "./Context/CartContext"
function ItemCart({item}){
    const{totalPrice}= useContext(CartContext)
    return(
        <>
        <div>{item.title } </div>
        
        </>
    )

}
export default ItemCart