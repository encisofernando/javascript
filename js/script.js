
// totalIngresos = 0;
// totalEgresos = 0;


// // FUNCIONES PARA SUMAR

// function sumarIngresos() {
//     for (let i = 0; i < misIngresos.length; i++) {
//         totalIngresos = totalIngresos + misIngresos[i].monto
//     }
//     return totalIngresos;
// }

// function sumarEgresos() {
//     for (let i = 0; i < misEgresos.length; i++) {
//         totalEgresos = totalEgresos + misEgresos[i].monto
//     }
//     return totalEgresos;
// }

// // CLASE CONSTRUCTORA DE OBJETOS

// class Dinero {
//     constructor(concepto, monto) {
//         this.concepto = concepto.toUpperCase();
//         this.monto = parseInt(monto);
//     }
// }

// // ARRAYS

// const misIngresos = [];
// const misEgresos = [];

// // CARGA DE INGRESOS

// for (let i = 1; i < 11; i++) {
//     alert("Concepto del Ingreso N° " + i)
//     let conceptoIngreso = prompt("Concepto del ingreso. Si desea omitir, escriba " +"ESC");
//     conceptoIngreso = conceptoIngreso.toUpperCase();
    
//     if (conceptoIngreso != "ESC") {
//         let montoIngreso = prompt("Monto del Ingreso:");
        
//         while (isNaN(montoIngreso) == true || parseInt(montoIngreso) < 0) {
//             alert("ERROR. Sólo los carácteres numéricos mayores a 0 son válidos.");
//             montoIngreso = prompt("Coloque nuevamente el monto del ingreso:");
//             if (isNaN(montoIngreso) == false && (parseInt(montoIngreso) > 0)) {
//                 break;
//             }
//         }
//         misIngresos.push(new Dinero(conceptoIngreso, montoIngreso));
//     }
//     else {
//         break;
//     }
// }

// // CARGA DE EGRESOS

// for (let i = 1; i < 11; i++) {
//     alert("Concepto del Gasto N° " + i)
//     let conceptoGasto = prompt("Concepto del gasto. Si desea omitir, escriba " +"ESC");
//     conceptoGasto = conceptoGasto.toUpperCase();
    
//     if (conceptoGasto != "ESC") {
//         let montoGasto = prompt("Monto del gasto:");
        
//         while (isNaN(montoGasto) == true || parseInt(montoGasto) < 0) {
//             alert("ERROR. Sólo los carácteres numéricos mayores a 0 son válidos.");
//             montoGasto = prompt("Coloque nuevamente el monto del gasto:");
//             if (isNaN(montoGasto) == false && (parseInt(montoGasto) > 0)) {
//                 break;
//             }
//         }
//         misEgresos.push(new Dinero(conceptoGasto, montoGasto));
//     }
//     else {
//         break;
//     }
// }


// // MUESTRA DE SALDOS

// sumarIngresos();
// sumarEgresos();
// let saldo = totalIngresos - totalEgresos;

// alert(
//     "Tus ingresos totales del mes son: $" + totalIngresos +"\n"+
//     "Tus gastos de este mes, suman: $" +totalEgresos +"\n"+
//     "Por lo tanto, tu saldo es de: $" + saldo);


// // MOSTRAR INFORMACIÓN DETALLADA

// let mensajeIngresos = "";
// for (let i = 0 ; i < misIngresos.length; i++){
//     mensajeIngresos += "Concepto: " +misIngresos[i].concepto + " | Monto: $" +misIngresos[i].monto + '\n';
// }

// let mensajeEgresos = "";
// for (let i = 0 ; i < misEgresos.length; i++){
//     mensajeEgresos += "Concepto: " +misEgresos[i].concepto + " | Monto: $" +misEgresos[i].monto + '\n';
// }

// alert(
//     "\n"
//     +"Tus Ingresos:" +"\n" 
//     +mensajeIngresos +"\n" 
//     +"\n"
//     +"Tus Egresos" +"\n"
//     +mensajeEgresos)

//MOSTRAR EN HTML

function mostrarDatos() {
    let ingreso1 = document.querySelector("#ing1");
    let monIng1 = document.querySelector("#mon-ing1");
    let ingreso2 = document.querySelector("#ing2");
    let monIng2 = document.querySelector("#mon-ing2");
    let ingreso3 = document.querySelector("#ing3");
    let monIng3 = document.querySelector("#mon-ing3");
    let egreso1 = document.querySelector("#egr1");
    let monEgr1 = document.querySelector("#mon-egr1");
    let egreso2 = document.querySelector("#egr2");
    let monEgr2 = document.querySelector("#mon-egr2");
    let egreso3 = document.querySelector("#egr3");
    let monEgr3 = document.querySelector("#mon-egr3");
    let mostrarForm = document.querySelector("#mostrarFormulario");
  
    let p = document.createElement("p");
    mostrarForm.appendChild(p);
  
  
  
    mostrarForm.style.textAlign = "center";
    mostrarForm.style.backgroundColor = "#4F4F4F";
    mostrarForm.style.color = "white";
    mostrarForm.style.padding = "1rem";
  
    mostrarForm.innerHTML = `<h1>Los datos ingresados son:</h1>
                             <h2>Ingresos</h2>
                             <p>Concepto Ingreso 1: ${ingreso1.value}</p>
                             <p>Monto Ingreso 1: ${monIng1.value}</p>
                             <p>Concepto Ingreso 2: ${ingreso2.value}</p>
                             <p>Monto Ingreso 2: ${monIng2.value}</p>
                             <p>Concepto Ingreso 3: ${ingreso3.value}</p>
                             <p>Monto Ingreso 3: ${monIng3.value}</p>
                             <h2>Gastos</h2>
                             <p>Concepto Gasto 1: ${egreso1.value}</p>
                             <p>Monto Gasto 1: ${monEgr1.value}</p>
                             <p>Concepto Gasto 2: ${egreso2.value}</p>
                             <p>Monto Gasto 2: ${monEgr2.value}</p>
                             <p>Concepto Gasto 3: ${egreso3.value}</p>
                             <p>Monto Gasto 3: ${monEgr3.value}</p>`;
  
    mostrarForm.style.width = "90%";
    mostrarForm.style.height = "50%";
    mostrarForm.style.margin = '0 auto';
    mostrarForm.style.marginTop = '3rem';
    mostrarForm.style.display = "flex";
    mostrarForm.style.flexDirection = "column";
  }