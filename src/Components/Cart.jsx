//import { getFirestore, addDoc,collection } from "firebase/firestore"
import ItemCart from "./ItemCart"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "./Context/CartContext"

function Cart() {
    const { cart, totalPrice } = useContext(CartContext)
    console.log(cart.length)
    /*const order={
        buyer:{
            name:'Cosme',
            email:'cosme@',
            phone:'65151',
            adress:'calle 1',
        },
        items: Cart.map((p)=>({
            id:p.id,
            title:p.title,
            price:p.price,
        })),
        total: totalPrice(),
    }
    function handleClick(){
        const db=getFirestore()
        const orderCollection= collection(db, 'orders')
        addDoc(orderCollection, order).then(({id}))
    }*/
    if (cart.length === 0) {
        return (
            <div className="NoProductos">
                <p>No hay productos <Link to='/'>Hacer compra</Link></p>
                
            </div>
        )
    }
    return (
        <div className='ContenedorCart'>
            <div className="CartItem">{cart.map((p) => (<ItemCart key={p.id} item={p} />))}</div>
            <div className="cart">
                <p><span>Monto total:</span> ${totalPrice()}</p>
                <Link to='/checkout' >{' '} <button>Confirmar</button></Link>
            </div>
        </div>
    )
}
export default Cart