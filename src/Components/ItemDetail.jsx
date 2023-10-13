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
            <li>Precio: ${item.Precio}</li>
            {item.PrecioXKg && <li>Precio por kg: {item.PrecioXKg}</li> }
            <li>En Stock: {item.stock}</li>
            <li>Puesto: {item.NamePuesto}</li>
            <li>N°Puesto: {item.NumPuesto}</li>
            <li>Categoria: {item.Category}</li>
         </ul>
          <img src={item.img} />
          {/*cuando se le hace doble click tira error, para ver replicar boton con ItemCount*/
              goToCart ? <Link to='/cart'>Terminar compra</Link> : <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />}
        </div>
    )
}
export default ItemDetail