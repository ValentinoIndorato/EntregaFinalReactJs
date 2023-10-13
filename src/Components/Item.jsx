import { Link } from 'react-router-dom'
function Item({ item }) {
    console.log({ item } + "este es item")
    return (
    <div className='card '>
        <Link to={'/item/' + item.id}>             
        <img src={item.img} />
        <ul>
            <li className='title'>{item.title}</li>
            <li className=''>Precio: ${item.Precio}</li>
            <li className='SmallDescription'>{item.SmallDescription}</li>
            <li className='stock'>Stock: {item.stock}</li>
            <li className='NamePuesto'>Puesto: {item.NamePuesto}</li>
            <li className='NumPuesto'>N° puesto: {item.NumPuesto}</li>
        </ul> 
        </Link>
    </div>
    )
}
// Si quiero usar {item.title} como className, como lo uso en el css, osea como hago dinamico el css
export default Item