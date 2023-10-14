import { useContext } from "react"
import { CartContext } from "./Context/CartContext"
import { Link } from "react-router-dom"
function ItemCart({item}){
    const{totalPrice, removeProduct, addProduct, }= useContext(CartContext)
    return(
     
        <div className="itemCart">            
            <img src={item.img}/>
            <ul><span></span>
            <li className="titleCart">{item.title } </li>
            <li><span>Descripción:</span> {item.SmallDescription } </li>
            <li><span>Cantidad a comprar:</span> {item.stock } </li>
            <li><span>Precio unitario:</span> ${item.Precio} </li>
            <li><span>Precio por cantidad:</span> ${item.Precio * item.stock} </li>             
            <div className="remov_add">
                <button onClick={()=>{removeProduct(item.id)}}>Remover </button>    
                <button disabled={item.stock===10} onClick={()=>{addProduct(item, 1)}}>Agregar producto </button> 
                <Link to={'/item/' + item.id}><button>Agregar varios</button></Link>  
            </div>
            </ul> 
        </div>
        
        
    )

}
export default ItemCart