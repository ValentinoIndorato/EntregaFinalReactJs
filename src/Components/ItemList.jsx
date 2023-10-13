import Item from "./Item"
function ItemList({ item }) {
    return (
        <>
            {item.map(item => <div key={item.id}> <Item item={item} /> </div>)}
        </>
    )
}
export default ItemList