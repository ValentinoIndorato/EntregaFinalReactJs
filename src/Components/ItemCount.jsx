import {useState,useEffect} from 'react'
function ItemCount({initial, stock, onAdd}){
    console.log (initial)
    console.log (stock)
    const[count, setCount]= useState(parseInt(initial))
    const [stocks, setStocks]= useState(stock)//para que usa esto la profe? 
    //stocks ¿pq teniendo valor del stock no lo tiene en cuenta en el if y no suma
    console.log(stock)
    console.log('stock')
    function sumar(){
        if(count<stock){
            setCount(count+1)
        }
    }
    function restar(){
        if(count>0){
            setCount(count-1)
        }
    }
    useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);
    return(
        <div>
            <button onClick={restar}>-</button>
            <button >{count}</button>
            <button onClick={sumar}>+</button>
            <button disabled={stock <= 0|| count <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )

}
export default ItemCount