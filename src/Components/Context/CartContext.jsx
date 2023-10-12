
import{useState,createContext} from 'react'
export const CartContext = createContext()// le puse minuscula CartContext

export function CartContextProvider({children}){
    const [cart,setCart]=useState([])
    const addProduct = (item, stock) => {
        console.log(item)
        if (isInCart(item.id)) {
            console.log(item)
          setCart(
            item.map((product) => {
              return product.id === item.id ? { ...product, stock: product.stock + stock }: product;
            })
          );
        } else {
          setCart([...cart, { ...item, stock }]);
        }
      };
      console.log(cart )
      console.log('este es el que busco')
    
      const totalPrice = () => 
         cart.reduce((prev, act) => prev + act.stock * act.Precio, 0)
      
    
      const totalProducts = () =>
        cart.reduce(
          (acumulador, productoActual) => acumulador + productoActual.stock,
          0
        );
    
      const clearCart = () => setCart([]);
    
      const isInCart = (id) =>
        cart.find((product) => product.id === id) ? true : false;
    
      const removeProduct = (id) =>
        setCart(cart.filter((product) => product.id !== id));
        return (
            <CartContext.Provider
              value={{
                clearCart,
                isInCart,
                removeProduct,
                addProduct,
                totalPrice,
                totalProducts,
                cart,
              }}
            >
              {children}
            </CartContext.Provider>
          );   
    
}
