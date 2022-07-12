
totalIngresos = 0;
totalEgresos = 0;


// FUNCIONES PARA SUMAR

function sumarIngresos() {
    for (let i = 0; i < misIngresos.length; i++) {
        totalIngresos = totalIngresos + misIngresos[i].monto
    }
    return totalIngresos;
}

function sumarEgresos() {
    for (let i = 0; i < misEgresos.length; i++) {
        totalEgresos = totalEgresos + misEgresos[i].monto
    }
    return totalEgresos;
}

// CLASE CONSTRUCTORA DE OBJETOS

class Dinero {
    constructor(concepto, monto) {
        this.concepto = concepto.toUpperCase();
        this.monto = parseInt(monto);
    }
}

// ARRAYS

const misIngresos = [];
const misEgresos = [];

// CARGA DE INGRESOS

for (let i = 1; i < 11; i++) {
    alert("Concepto del Ingreso N° " + i)
    let conceptoIngreso = prompt("Concepto del ingreso. Si desea omitir, escriba " +"ESC");
    conceptoIngreso = conceptoIngreso.toUpperCase();
    
    if (conceptoIngreso != "ESC") {
        let montoIngreso = prompt("Monto del Ingreso:");
        
        while (isNaN(montoIngreso) == true || parseInt(montoIngreso) < 0) {
            alert("ERROR. Sólo los carácteres numéricos mayores a 0 son válidos.");
            montoIngreso = prompt("Coloque nuevamente el monto del ingreso:");
            if (isNaN(montoIngreso) == false && (parseInt(montoIngreso) > 0)) {
                break;
            }
        }
        misIngresos.push(new Dinero(conceptoIngreso, montoIngreso));
    }
    else {
        break;
    }
}

// CARGA DE EGRESOS

for (let i = 1; i < 11; i++) {
    alert("Concepto del Gasto N° " + i)
    let conceptoGasto = prompt("Concepto del gasto. Si desea omitir, escriba " +"ESC");
    conceptoGasto = conceptoGasto.toUpperCase();
    
    if (conceptoGasto != "ESC") {
        let montoGasto = prompt("Monto del gasto:");
        
        while (isNaN(montoGasto) == true || parseInt(montoGasto) < 0) {
            alert("ERROR. Sólo los carácteres numéricos mayores a 0 son válidos.");
            montoGasto = prompt("Coloque nuevamente el monto del gasto:");
            if (isNaN(montoGasto) == false && (parseInt(montoGasto) > 0)) {
                break;
            }
        }
        misEgresos.push(new Dinero(conceptoGasto, montoGasto));
    }
    else {
        break;
    }
}


// MUESTRA DE SALDOS

sumarIngresos();
sumarEgresos();
let saldo = totalIngresos - totalEgresos;

alert(
    "Tus ingresos totales del mes son: $" + totalIngresos +"\n"+
    "Tus gastos de este mes, suman: $" +totalEgresos +"\n"+
    "Por lo tanto, tu saldo es de: $" + saldo);


// MOSTRAR INFORMACIÓN DETALLADA

let mensajeIngresos = "";
for (let i = 0 ; i < misIngresos.length; i++){
    mensajeIngresos += "Concepto: " +misIngresos[i].concepto + " | Monto: $" +misIngresos[i].monto + '\n';
}

let mensajeEgresos = "";
for (let i = 0 ; i < misEgresos.length; i++){
    mensajeEgresos += "Concepto: " +misEgresos[i].concepto + " | Monto: $" +misEgresos[i].monto + '\n';
}

alert(
    "\n"
    +"Tus Ingresos:" +"\n" 
    +mensajeIngresos +"\n" 
    +"\n"
    +"Tus Egresos" +"\n"
    +mensajeEgresos)