import{Link} from 'react-router-dom'
function Item({item}){
    console.log({item}+"este es item")
    return(<div>
        <Link to={'/item/' + item.id}>
        <div>{item.title}</div>
        </Link>
        
            <div>{item.SmallDescription}</div>
            <div>{item.stock}</div>
            <div>{item.NamePuesto}</div>
        </div>
    )

}
export default Item