//** SEGUNDA ENTREGA PROYECTO FINAL **//

//**** DECLARACION DE VARIABLES GLOBALES ****//
let cantidad = 0; 
let carritoProductos =
JSON.parse(localStorage.getItem("carritoProductos")) || []; 
let codigo = 0; 
let confirmacion; 
let itemBorrar; 
let productos; 
let total = 0; 
const btnAceptar = document.querySelector('#btnAceptar'); 
const btnCarro1 = document.querySelector("#btnCarro1"); 
const btnCarro2 = document.querySelector("#btnCarro2"); 
const btnCarro3 = document.querySelector("#btnCarro3"); 
const btnCarro4 = document.querySelector("#btnCarro4"); 
const btnComprar = document.querySelector("#btnComprar"); 
const btnDeletAll = document.querySelector("#btnDeletAll"); 
const cantidadTotal = document.querySelector("#cantidad-total"); 
const montoTotal = document.querySelector("#montoTotal"); 
const printCarritoHtml = document.querySelector("#printHtml"); 

//**** HABILITACION Y COMANDO DEL MENU ****//

    $("#pills-productos-tab").on("click", function (e) {
    e.preventDefault();
    $('#mensajes-alerta').empty();
    $(this).tab("show");
    });

    $("#pills-carrito-tab").on("click", function (e) {
    e.preventDefault();
    $('#mensajes-alerta').empty();
    $(this).tab("show");
    });

//**** FUNCION DE IMPRESIÓN ITEMS EN HTML ****//
const imprimirCarritoEnHtml = () => {
    while (printCarritoHtml.firstChild) { 
    printCarritoHtml.removeChild(printCarritoHtml.firstChild);
    }
    carritoProductos.forEach((item) => {
    const precioCantidad = item.precio * item.cantidad;
    productos = document.createElement("tr");
    productos.innerHTML = `<th scope="row"><img src=${item.portada} width="70rem"></th>
                                <td>${item.titulo}</td>
                                <td>${item.plataforma}</td>
                                <td>${item.cantidad}</td>
                                <td>$${precioCantidad}</td>
                                <td><button id="${item.codigo}" type="button" class="borrar btn btn-danger">X</button></td>`; 

    printCarritoHtml.appendChild(productos);
    });
    montoTotal.innerHTML = ` $${montoTotalProductos()}`; 
    borrarItem();
    if (carritoProductos.length !== 0) { 
        cantidadTotal.innerHTML = `<span class="badge badge-pill bg-danger">${cantidadTotalProductos()}</span>`;
    } else {
    cantidadTotal.innerHTML = ""; 
    }
};

//**** FUNCION MONTO TOTAL PRODUCTOS ****//
const montoTotalProductos = () => {
    total = 0;
    for (item of carritoProductos) {
    total += item.precio * item.cantidad; 
    }
    return total;
};
//**** FUNCION CONTABILIZAR PRODUCTOS ****//
const cantidadTotalProductos = () => {
    total = 0;
    for (item of carritoProductos) {
    total += item.cantidad; 
    }
    return total;
};

//**** FUNCION BORRADO DE ITEM POR BOTON ****//
const borrarItem = () => {
  const btnBorrarItem = document.querySelectorAll("tr button"); 
    btnBorrarItem.forEach((btn) => { 
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        itemBorrar = parseInt(btn.id); 
        carritoProductos = JSON.parse(localStorage.getItem("carritoProductos")); 
        const indexItemBorrar = carritoProductos.findIndex(
        (item) => item.codigo === itemBorrar
        );
        carritoProductos.splice(indexItemBorrar, 1); 
        localStorage.setItem(
        "carritoProductos",
        JSON.stringify(carritoProductos)
        ); 
        imprimirCarritoEnHtml(); 
      });
    });
};

//**** FUNCION DE FILTRADO CODIGO ITEMS ****//
const contarRepeticion = (codigo) =>
  carritoProductos.filter((producto) => producto.codigo === codigo); 
  
//**** FUNCION VACIAR CARRITO ****//
function vaciarCarrito () {
    if (carritoProductos.length > 0) {
    carritoProductos = [];
    localStorage.clear();
    imprimirCarritoEnHtml(); 
    }
  }


imprimirCarritoEnHtml(carritoProductos); 

btnCarro1.addEventListener("click", (e) => { 
  e.preventDefault();
  cantidad = contarRepeticion(1).length + 1; 
    const item1 = new Carrito("Zapatilla", 1, 2800, cantidad, '41', "/img/zapatillas.webp"); 
  ingresoCarrito(item1); 
}); 
btnCarro2.addEventListener("click", (e) => {
  e.preventDefault();
  cantidad = contarRepeticion(2).length + 1; 
    const item2 = new Carrito("Pantalon", 2, 2000, cantidad, '44', "/img/pantalon-de-hombre-venture.jpg"); 
  ingresoCarrito(item2); 
  //
}); 
btnCarro3.addEventListener("click", (e) => { 
  e.preventDefault();
  cantidad = contarRepeticion(3).length + 1; 
    const item3 = new Carrito("Remera", 3, 2500, cantidad, 'M', "/img/remera.jfif"); 
  ingresoCarrito(item3); 
}); 
btnCarro4.addEventListener("click", (e) => { 
  e.preventDefault();
  cantidad = contarRepeticion(4).length + 1; 
    const item4 = new Carrito("Conjunto", 4, 2800, cantidad, 'XL', "/img/conjunto.webp"); 
  ingresoCarrito(item4); 

}); 


const ingresoCarrito = (item) => {
    const existeItem = carritoProductos.some(
    (producto) => producto.codigo === item.codigo
  ); 
    if (existeItem) {
    const productos = carritoProductos.map((producto) => {
      
        if (producto.codigo === item.codigo) {
        producto.cantidad++;
        return producto; 
        } else {
        return producto; 
        }
    });
    carritoProductos = [...productos]; 
    } else {
    carritoProductos = [...carritoProductos, item]; 
    }
  localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos)); 
  imprimirCarritoEnHtml(); 
};

//**** OBJECT CONSTRUCTOR ****//
class Carrito {
    constructor(titulo, codigo, precio, cantidad, plataforma, portada) {
    
    this.titulo = titulo;
    this.codigo = codigo;
    this.precio = precio;
    this.cantidad = cantidad;
    this.plataforma = plataforma;
    this.portada = portada;
    }
}

btnDeletAll.addEventListener("click", vaciarCarrito); 

btnComprar.addEventListener("click", () => { 
  if(carritoProductos.length !== 0) {
    confirmacion = new bootstrap.Modal(document.querySelector('#ventanaConfirmacion')); 
    confirmacion.show(); 
    vaciarCarrito(); 
    $('#mensajes-alerta').append('<div class="alert alert-success" role="alert">Compra realizada con exito.'); 
    btnAceptar.addEventListener("click", () => {
      confirmacion.hide(); 
      
  });
}
}); 
