import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer';
import Error404 from './Components/Error404';
import CartWidget from './Components/CartWidget';
function App() {
  return (
    <div >
      
      <BrowserRouter>
      <NavBar /> 
      <Routes>
      <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id'  element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />  
        <Route path="/cart" element={<CartWidget/>} />                                
        <Route path='*'element={<Error404 />} />         
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
