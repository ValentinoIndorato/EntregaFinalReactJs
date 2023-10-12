import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer';
import Error404 from './Components/Error404';
//import CartWidget from './Components/CartWidget';
import { CartContextProvider } from './Components/Context/CartContext';
import Checkout from './Components/Checkout';
import Cart from './Components/Cart';
function App() {
  return (
    <div >
      
      <BrowserRouter>
      <CartContextProvider>
      <NavBar /> 
      <Routes>
      <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id'  element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />  
        <Route path="/cart" element={<Cart/>} />                                
        <Route path="/checkout" element={<Checkout/>} />  
        <Route path='*'element={<Error404 />} />         
      </Routes>
      </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
