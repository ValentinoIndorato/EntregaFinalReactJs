import ItemCount from "./ItemCount"
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { CartContext } from "./Context/CartContext" 
function ItemDetail({item}){
    const {addProduct}=useContext(CartContext)
    const[goToCart, setGoToCart] = useState(false);
    const onAdd = (stock) =>{
        setGoToCart(true);
        addProduct(item, stock);
       }
return(
    <div>        
        <div>{item.Category}</div>
        <div>{item.Precio}</div>
        <div>{item.NamePuesto}</div>
        <div>{item.Category}</div>
        {/*cuando se le hace doble click tira error, para ver replicar boton con ItemCount*/
        goToCart ? <Link to='/cart'>Terminar compra</Link> :<ItemCount stock={item.stock} initial={0} onAdd={onAdd} />}
        <div>
        
     </div>
    </div>
)
}
export default ItemDetail