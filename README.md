# El Norte | [Visitar](https://elnorte.netlify.app/) / <sub>*Diseñado y desarrollado por Valentino Indorato*</sub>
##  E-commerce web app, enfocada en el rubro alimenticio
***Idea o ¿porque? al final****

 De momento se plantearon un **home** que incluye una **navbar** y todos los **productos en formato card**, con algunos datos.
- **Navbar**: contiene un link al home, los links de categorías y un **carrito** con la numeración de elementos dentro **que direcciona a los productos que se van a comprar**.
- **Para comprar** se debe acceder al producto que direcciona según su id.
  - Dicha dirección muestra el detalle del producto y la **funcionalidad para sumar o restar un producto**, la de **agregar al carrito** y la de **terminar compra** que aparece tras agregar al carrito. 
  - El botón terminar compra, direcciona al carrito, en el cual aparecen los productos seleccionados. A su derecha tendrá el monto total y podrá confirmar la compra.
  - Al confirmar se direcciona al checkout, donde habrá un formulario y un detalle de los montos.
  - **Tras enviar correctamente el formulario** se le detalla el id de la orden al usuario y **sube a firebase**.


Consideraciones y **aspectos a mejorar** de la funcionalidad.
- En el carrito decidí colocar un botón que "agrega UN producto", "remover" todos y si quiere agregar más de un producto que usé "agregar varios". Entiendo que no es lo más deseable, a mi modo de ver, pero es lo que he logrado que funcione.
Hay un error que al hacer esto no le importa la cantidad que hay en el carrito al redireccionar para agregar varios.
- Otra cuestión es que al recargar la página no queda guardado la cantidad de productos a comprar, por no utilizar el storage. (Intentar Agregar.)
Ambas son cosas a agregar o mejorar.

## Instrucciones para ejecutar la app
Como clonar el repo y ejecutar el proyecto localmente:
#### 1. Clonar este repositorio
- git clone [https://github.com/No-Country/s13-03-m-node-react.git](https://github.com/ValentinoIndorato/EntregaFinalReactJs.git)
#### 2. Abrir la terminal y correr el comando:
- cd EntregaFinalReactJs
#### 3. Finalmente ejecutar los comandos:
- npm install
- npm start
## Tecnologías Utilizadas
| Figma | HTML, CSS y JavaScript | React JS | react-router-dom | Firebase | Netlify |
|-------| ---------------------- | -------- | ---------------- | ---------| --------|

## Capturas de pantalla
<div style="display: flex; flew-wrap: wrap">
  <img width="600" src="/src/assets/assetsReadme/desktopElNorte.gif"/>
  <img width="200" src="/src/assets/assetsReadme/mobileElNorte.gif"/>
</div>

## Idea
