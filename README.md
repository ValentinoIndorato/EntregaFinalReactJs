npm start
Web app tipo e-commers relacionada con el rubro alimenticion, de momento se plantearon un home en el cual se visualizan todos los productos, y tres link los cuales se llaman y direccionan a las categorias.
-Una navbar que contiene un link al home y los link de categorias, un carrito con la numeracion de elementos dentro.
-Para comprar se debe acceder al producto, que direcciona al producto segun su id. Dicha direccion muestra el detalle del producto y los botones para sumar o restar un producto, uno para agregar al carrito y el terminar compra que se aparece tras agregar al carrito. El botton terminar compra, direcciona al carrito, en el cual aparecen los producctos a comprar con la cantidad, el precio x unidad y precio por cantidad. A su derecha tendra el monto total y un boton para confirmar.
- Al confirmar se direcciona al checkout, donde habra un form y un detalle de los montos.
- Tras enviar correctamente el form se detalla el id de la orden y sube al firebase.


Consideraciones de funcionalidad.
- En el carrito decidi colocar un boton que "agrega UN producto", "remover" todos y si quiere agregar mas de un producto que use "agregar varios". Entiendo que no es lo mas deseable, a mi modo de ver, pero es lo que he logrado que funcione.
Hay un error que al hacer esto no le importa la cantidad que hay en el carrito al redireccionar para agregar varios.
-Otra cuestion es que al recargar la pagina no queda guardado la cantidad de productos a comprar, por no utilizar el storage. (Itentar Agregar.)
Ambas son cosas a agregar o mejorar.