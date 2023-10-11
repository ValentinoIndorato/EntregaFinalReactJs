import {useState} from 'react'
function ItemCount({stock}){
    const[count, setCount]= useState(1)
    const [stocks, setStocks]= useState(stock)
    function sumar(){
        if(count<stocks){
            setCount(count+1)
        }
    }
    function restar(){
        if(count>1){
            setCount(count-1)
        }
    }
    return(
        <div>
            <button onClick={restar}>-</button>
            <button >{count}</button>
            <button onClick={sumar}>+</button>
        </div>
    )

}
export default ItemCount