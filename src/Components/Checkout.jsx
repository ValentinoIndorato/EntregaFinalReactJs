import { useState } from "react"
import { getFirestore, addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore"
import { useContext } from "react"
import { CartContext } from "./Context/CartContext"
import { Link } from "react-router-dom"
function Checkout() {
    const { clearCart, cart, removeProduct, totalPrice, } = useContext(CartContext)
    const [nombre, setnombre] = useState('')
    const [apellido, setapellido] = useState('')
    const [telefono, settelefono] = useState('')
    const [email, setemail] = useState('')
    const [emailrep, setemailrep] = useState('')
    const [error, seterror] = useState('')
    const [ordenId, setordenId] = useState('')
    const [mensaje, setmensaje] = useState('')

    const manejarFormulario = (event) => {
        event.preventDefault()
        if (!nombre || !apellido || !telefono || !email || !emailrep) {
            seterror('Complete los campos obligatorios')
            return
        }
        if (email !== emailrep) {
            seterror('los email no coinciden')
        }

        const total = totalPrice()
        console.log(cart)
        const order = {
            item: cart.map((p) => ({
                id: p.id,
                title: p.title,
                precio: p.Precio,
                stock: p.stock,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        }
        console.log(order)
        Promise.all(
            order.item.map(async (productOrder) => {
                const db = getFirestore()
                const productRef = doc(db, 'products', productOrder.id)
                const productGetDoc = await getDoc(productRef)
                const stockActual = productGetDoc.data().stock
                console.log(stockActual)
                await updateDoc(productRef, {
                    stock: stockActual - productOrder.stock,
                })
            })
        ).then(() => {
            const db = getFirestore()

            addDoc(collection(db, 'orders'), order)
                .then((docRef) => {
                    setordenId(docRef.id)
                    removeProduct()
                })
                .catch((error) => {
                    console.log('error', error)
                    seterror('error orden 2')
                })
        })
            .catch((error) => {
                console.log('error', error)
                seterror('error orden 1')
            })

        setnombre('')
        setapellido('')
        settelefono('')
        setemail('')
        setemailrep('')
        setmensaje('')
    }

    return (
        <>
            <div className="ordenCheckout">
                <div className="Checkout">
                    <h2>Complete con sus datos</h2>
                    <form onSubmit={manejarFormulario} className="form">
                        <label>Nombre: </label>
                        <input type="text" value={nombre} onChange={(e) => setnombre(e.target.value)}  disabled={ordenId}/>
                        <label>Apellido: </label>
                        <input type="text" value={apellido} onChange={(e) => setapellido(e.target.value)} disabled={ordenId}/>
                        <label>Telefono: </label>
                        <input type="number" value={telefono} onChange={(e) => settelefono(e.target.value)} disabled={ordenId}/>
                        <label>Email: </label>
                        <input type="email" value={email} onChange={(e) => setemail(e.target.value)}disabled={ordenId} />
                        <label>Confirmar email: </label>
                        <input type="email" value={emailrep} onChange={(e) => setemailrep(e.target.value)} disabled={ordenId}/>
                        {ordenId ? <p className="enviadoForm">Gracias por comprar, tu numeor de orden es <span>{ordenId}</span>{clearCart()}</p> : <p className="errorForm">{error}</p>/*como redirecciono, cuando esto termine , al home?*/}
                        {ordenId ? "" : <button disabled={!nombre || !apellido || !telefono || !email || !emailrep} type="submit" >Finalizar compra</button>}
                        {ordenId ? <Link to='/' >{' '} <button >Inicio</button></Link> : <Link to='/Cart' >{' '} <button>Volver al Carrito</button></Link>}
                    </form>
                </div>
                <ul>
                    <li><p><span>Producto</span></p> <p><span>Precio unitario</span></p> <p><span>Precio por cantidad</span></p></li>
                    {cart.map((p) => (<li key={p.id}>
                                                    <p><span>{p.title}</span> </p>
                                                    <p> ${p.Precio}</p>
                                                    <p className="precioXcanti"><span>${p.Precio * p.stock}</span> </p>
                                      </li>))}
                    <li className="totalPrice"><p><span>Precio Total:</span></p> <p><span className="totalPriceSpan">${totalPrice()}</span></p></li>
                </ul>
            </div>
        </>
    )


}
export default Checkout
/*<label></label>
            <input type="text"value={ordenId} onChange={(e)=>setordenId(e.target.value)} />
            <label></label>
            <input type="text" value={mensaje} onChange={(e)=>setmensaje(e.target.value)}/>*/
/*{cart.map((p)=>(<div key={p.id}>
    <p>{''} {p.title}</p>
    <p>${p.Precio}</p>
    <p>${p.Precio * p.stock }</p>
 </div>))}*/