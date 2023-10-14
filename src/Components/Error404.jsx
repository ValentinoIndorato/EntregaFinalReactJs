import { Link } from "react-router-dom"
function Error404(){
    return(
        <div className="error404">
            <Link to='/'><h2>Vuelva al inicio por aqui</h2></Link>
            <h1>ERROR 404</h1>            
        </div>
    )
}
export default Error404