import ItemCount from "./ItemCount"
function ItemDetail({item}){
return(
    <div>        
        <div>{item.Category}</div>
        <div>{item.Precio}</div>
        <div>{item.NamePuesto}</div>
        <div>{item.Category}</div>
        <ItemCount stock={item.stock}/>
    </div>
)
}
export default ItemDetail