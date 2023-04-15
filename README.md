# Aplicación SANCHBUY

Esta es una aplicación web de compras online construida con React y Redux. También se utilizó Sass para el estilado y json-server para simular una base de datos.

## Instalación
### Instalar dependencias `npm install`

### Iniciar json-server
json-server --watch db.json --routes routes.json  --port 3001


### Iniciar la aplicación
npm start

### scripts
La aplicación incluye los siguientes scripts:

### npm start
Inicia la aplicación en modo de desarrollo en el puerto 3000.
### Credenciales
email: dontulon@gmail.com
password: 1234567

###  npm run build
Compila la aplicación para producción en la carpeta build.

### npm test
Ejecuta las pruebas unitarias.

### npm run eject
Expulsa la configuración de webpack y babel para personalizar la configuración.

### Estructura del proyecto

├── src
│   ├── actions
│   ├── components
│   ├── constants
│   ├── Hooks
│   ├── mocks
│   ├── reducers
│   ├── styles
│   ├── store.js
│   ├── App.js
│   └── index.js
├── db.json
└── package.json


### Funcionamiento de la aplicación
La aplicación es una tienda online donde los usuarios pueden buscar, agregar y comprar productos. Los usuarios también pueden agregar productos a su lista de favoritos y ver su historial de compras.

La página principal muestra una lista de productos disponibles, ordenados por categoría. Los usuarios pueden buscar productos por nombre o categoría utilizando el campo de búsqueda en la barra de navegación.

Los usuarios pueden agregar productos al carrito de compras haciendo clic en el botón "Agregar al carrito" en la página de detalles del producto. Los usuarios también pueden ajustar la cantidad de un producto en su carrito y eliminar productos de su carrito.

Para comprar, los usuarios pueden hacer clic en el botón "Comprar" en la página de carrito y completar un formulario de información de envío y pago.

Los usuarios pueden agregar productos a su lista de favoritos haciendo clic en el botón "Agregar a favoritos" en la página de detalles del producto. Los usuarios pueden ver su lista de favoritos haciendo clic en "Favoritos" en la barra de navegación.

Los usuarios pueden ver su historial de compras haciendo clic en "Historial de compras" en la barra de navegación. Los usuarios pueden ver detalles de una compra específica haciendo clic en el botón "
