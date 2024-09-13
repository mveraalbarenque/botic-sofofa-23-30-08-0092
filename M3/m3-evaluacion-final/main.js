import { Producto } from "./class/Producto.js";
import { Carrito } from "./class/Carrito.js";

const productos = [
  new Producto(1, "Leche", 1000, 50),
  new Producto(2, "Pan de Molde", 2000, 30),
  new Producto(3, "Queso", 1200, 75),
  new Producto(4, "Mermelada", 890, 25),
  new Producto(5, "Azucar", 1300, 100),
  new Producto(6, "Arroz", 500, 2),
  new Producto(7, "Agua", 250, 1),
];

const carrito = new Carrito();

const iniciarCompra = () => {
  let seguir = true;

  while (seguir) {
    const idProducto = parseInt(prompt("Ingrese el numero del producto que deseas agregar al carrito:"));
    const cantidad = parseInt(prompt("Ingrese la cantidad de unidades:"));

    const producto = productos.find((obj) => obj.id === idProducto);

    if (producto) {
      carrito.agregarProducto(producto, cantidad);
      seguir = confirm("¿Desea seguir agregardo productos?");
    } else alert("Producto no encontrado. Intente nuevamente.");
  }

  if (!seguir) {
    carrito.mostrarDetalles();
    carrito.finalizarCompra();
  }
};

const mostrarProductos = () => {
  const list = document.getElementById("lista-productos");
  productos.forEach((obj) => {
    const { id, nombre, precio, stock } = obj;
    const newElement = document.createElement("li");
    newElement.textContent = `${id} - ${nombre} $${precio} - Stock: ${stock}`;
    list.appendChild(newElement);
  });
};

mostrarProductos();

document.getElementById("botonComprar").addEventListener("click", iniciarCompra);
