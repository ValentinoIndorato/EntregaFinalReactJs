import { Link } from 'react-router-dom'
function Item({ item }) {
    console.log({ item } + "este es item")
    return (
    <div className='card '>
        <Link to={'/item/' + item.id}>             
        <img src={item.img} />
        <div>{item.title}</div>   
        <div>{item.SmallDescription}</div>
        <div>{item.stock}</div>
        <div>{item.NamePuesto}</div>
        </Link>
    </div>
    )
}
export default Item