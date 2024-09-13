import { Producto } from "./Producto.js";

export class Carrito {
  constructor() {
    this.productosSeleccionados = [];
  }

  agregarProducto(producto, cantidad) {
    if (producto.stock >= cantidad) {
      this.productosSeleccionados.push({ producto, cantidad });
      producto.stock -= cantidad;
    } else alert(`Stock insuficiente para ${producto.nombre}`);
  }

  calcularTotal() {
    return this.productosSeleccionados.reduce((total, obj) => {
      return total + obj.producto.precio * obj.cantidad;
    }, 0);
  }

  mostrarDetalles() {
    if (this.productosSeleccionados.length === 0) console.log("El carrito está vacío.");
    else {
      console.log("Detalle de la compra:");
      this.productosSeleccionados.forEach((item) => {
        console.log(
          `Producto: ${item.producto.nombre}, Cantidad: ${item.cantidad}, Precio unitario: $${item.producto.precio}`
        );
      });
      console.log(`Total a de la compra: $${this.calcularTotal()}`);
    }
  }

  finalizarCompra() {
    if (this.productosSeleccionados.length === 0) alert("No hay productos en el carrito para finalizar la compra.");
    else {
      this.mostrarDetalles();
      alert(`Compra finalizada. Total a pagar: $${this.calcularTotal()}`);
      this.productosSeleccionados = [];
    }
  }
}
