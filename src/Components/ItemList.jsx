import Item from "./Item"
function ItemList ({item}){
    return(
        <div>            
            {item.map(item=><div key={item.id}> <Item item={item}/> </div>)}
        </div>
    )
}
export default ItemList