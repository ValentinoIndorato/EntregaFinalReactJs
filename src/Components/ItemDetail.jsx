import ItemCount from "./ItemCount"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { CartContext } from "./Context/CartContext"
function ItemDetail({ item }) {
    const { addProduct } = useContext(CartContext)
    const [goToCart, setGoToCart] = useState(false);
    const onAdd = (stock) => {
        setGoToCart(true);
        addProduct(item, stock);
    }
    return (
        <div className="ItemDetail">
            
        <ul >
            <li className="itemDetailTitle">{item.title}</li>
            <li><span>Precio:</span><span className="precio"> ${item.Precio}</span></li>
            {item.PrecioXKg && <li>Precio por kg: {item.PrecioXKg}</li> }
            <li><span>En Stock:</span> {item.stock}</li>
            <li><span>Puesto:</span> {item.NamePuesto}</li>
            <li><span>N°Puesto:</span> {item.NumPuesto}</li>
            <li><span>Categoria:</span> {item.Category}</li>
            {/*SOLUCIONADO? cuando se le hace doble click tira error, para ver replicar boton con ItemCount*/
              goToCart ? <Link to='/cart'><button>Terminar compra</button></Link> : <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />}

         </ul>
         
          <img src={item.img} />
        </div>
    )
}
export default ItemDetail