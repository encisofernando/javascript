let controlIngresos = 0;
let controlEgresos = 0;

function saldo(ingresos,egresos){
    return ingresos - egresos;
}

// INGRESOS DEL USUARIO

for(let i=1; i<11; i++){
    alert("Descripción ingreso N° " + i)
    let conceptoIngreso = prompt("Concepto del ingreso. Si desea omitir, escriba " +"ESC");
    conceptoIngreso = conceptoIngreso.toUpperCase();

    if (conceptoIngreso != "ESC"){
        let montoIngreso = prompt("Monto del ingreso:");
        controlIngresos = controlIngresos + parseInt(montoIngreso);

        while (isNaN(montoIngreso) == true || parseInt(montoIngreso) < 0){
            alert("ERROR. Sólo los carácteres numéricos mayores a 0 son válidos.");
            montoIngreso = prompt("Coloque nuevamente el monto del ingreso:");
            if (isNaN(montoIngreso) == false && (parseInt(montoIngreso) > 0)){
                controlIngresos = controlIngresos + parseInt(montoIngreso);
                break;
            }
        }
    }
    else{
        break;
    }
}

// GASTOS DEL USUARIO

for(let i=1; i<11; i++){
    alert("Descripción del gasto N° " + i)
    let conceptoGasto = prompt("Concepto del gasto. Si desea omitir, escriba " +"ESC");
    conceptoGasto = conceptoGasto.toUpperCase();

    if (conceptoGasto != "ESC"){
        let montoEgresos = prompt("Monto del gasto:");
        controlEgresos = controlEgresos + parseInt(montoEgresos);

        while (isNaN(montoEgresos) == true || parseInt(montoEgresos) < 0){
            alert("ERROR. Sólo los carácteres numéricos mayores a 0 son válidos.");
            montoEgresos = prompt("Coloque nuevamente el monto del gasto:");
            if (isNaN(montoEgresos) == false && (parseInt(montoEgresos) > 0)){
                controlEgresos = controlEgresos + parseInt(montoEgresos);
                break;
            }
        }
    }
    else{
        break;
    }
}

// SALDOS TOTALES

alert(
    "Tus ingresos son de: $" + controlIngresos +"\n"+
    "Tus gastos de este mes, suman: $" +controlEgresos +"\n"+
    "Tu saldo disponible, es de: $" + saldo(controlIngresos,controlEgresos));