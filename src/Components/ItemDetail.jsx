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
            <li>{item.title}</li>
            <li>{item.Precio}</li>
            <li>En Stock: {item.stock}</li>
            <li>{item.NamePuesto}</li>
            <li>{item.Category}</li>
         </ul>
          <img src={item.img} />
          {/*cuando se le hace doble click tira error, para ver replicar boton con ItemCount*/
              goToCart ? <Link to='/cart'>Terminar compra</Link> : <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />}
        </div>
    )
}
export default ItemDetail