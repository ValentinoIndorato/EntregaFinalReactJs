import { useState } from "react"
import { getFirestore, addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore"
import { useContext } from "react"
import { CartContext } from "./Context/CartContext" 
function Checkout(){
   const {cart, removeProduct,totalPrice} = useContext(CartContext)
   const [nombre, setnombre]= useState('a')
   const [apellido, setapellido]= useState('')
   const [telefono, settelefono]= useState('')
   const [email, setemail]= useState('')
   const [emailrep, setemailrep]= useState('')
   const [error, seterror]= useState('')
   const [ordenId, setordenId]= useState('')
   const [mensaje, setmensaje]= useState('')

   const manejarFormulario= (event)=>{
    event.preventDefault()
    if(!nombre||!apellido||!telefono||!email||!emailrep){
        seterror('Complete los campos obligatorios')
        return
    }
     if (email !== emailrep){
        seterror('los email no coinciden')
    }
   
   const total=totalPrice()
   console.log(cart )
   const order={
    item: cart.map((p)=>({
        id:p.id,
        title:p.title,
        precio:p.Precio,
        stock:p.stock,
    })),
    total: total,
    fecha: new Date(),
    nombre,
    apellido,
    telefono,
    email,
   }
   console.log(order )
   Promise.all(
    order.item.map(async(productOrder)=>{
        const db= getFirestore()
        const productRef=doc(db,'products',productOrder.id )
        const productGetDoc=await getDoc(productRef)
        const stockActual= productGetDoc.data().stock
        console.log(stockActual)
        await updateDoc(productRef,{
            stock: stockActual-productOrder.stock,})
    }) 
   ) .then(()=>{
    const db= getFirestore()
    
    addDoc(collection(db, 'orders'), order)
    .then((docRef)=>{
        setordenId(docRef.id)
        removeProduct()
    })
    .catch((error)=>{console.log('error',error)
    seterror('error orden 2')})
    })
    .catch((error)=>{console.log('error',error)
    seterror('error orden 1')})

    setnombre('')
    setapellido('')
    settelefono('')
    setemail('')
    setemailrep('')
    setmensaje('')
}
   
   return(
    <div>
        <h2>Complete con sus datos</h2>
        <form onSubmit={manejarFormulario}>
            {cart.map((p)=>(<div key={p.id}>
                                <p>{''} {p.title}</p>
                                <p>${p.Precio}</p>
                                <p>{p.Precio * p.stock }</p>
                             </div>))}
            <label>Nombre: </label>
            <input type="text" value={nombre} onChange={(e)=>setnombre(e.target.value)}/>
            <label>Apellido: </label>
            <input type="text" value={apellido} onChange={(e)=>setapellido(e.target.value)}/>
            <label>Telefono: </label>
            <input type="number"value={telefono} onChange={(e)=>settelefono(e.target.value)} />
            <label>Email: </label>
            <input type="email"value={email} onChange={(e)=>setemail(e.target.value)} />
            <label>Confirmar emai: </label>
            <input type="email"value={emailrep} onChange={(e)=>setemailrep(e.target.value)} />
            {error && <p>{error}</p>}
            {ordenId &&(<p>Gracias por comprar</p>)}
            <button type="submit" >Finalizar compra</button>                     
        </form>
    </div>
   )
   

}
export default Checkout
/*<label></label>
            <input type="text"value={ordenId} onChange={(e)=>setordenId(e.target.value)} />
            <label></label>
            <input type="text" value={mensaje} onChange={(e)=>setmensaje(e.target.value)}/>*/