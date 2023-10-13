import { Link } from "react-router-dom"
function Error404(){
    return(
        <>
            {<Link to='/'><h2>Vuelva al inicio por aqui</h2></Link>}
            <h1>ERROR 404</h1>            
        </>
    )
}
export default Error404