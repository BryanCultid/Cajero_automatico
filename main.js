let saldo = 3000;
let cantidadUsuario = 0 ;


function consultarSaldo() {
    if (saldo <= 0){
          alert ("no tiene saldo en estos momentos")
    }else{
        mostrarSaldoEnPantalla();
    }
}

//retirar//
function retirarMonto() {
let input = document.getElementById("retiro").value;

 cantidadUsuario = parseFloat(input);

 if (saldo <= 0){
    alert ("no tiene saldo en estos momentos")
}if (cantidadUsuario <= 0 || isNaN(cantidadUsuario)|| cantidadUsuario > saldo ){
    alert ("por favor ingrese un valor valido")
    return;
}else {
 saldo = saldo - cantidadUsuario;
 mostrarSaldoEnPantalla();
}
}

//depositar//
function depositarMonto(){
 let input = document.getElementById("deposito").value

 cantidadUsuario = parseFloat(input);

 if (cantidadUsuario <= 0  || isNaN(cantidadUsuario)){
    alert ("por favor ingrese un valor valido");
    return;
 }else{
    saldo = saldo + cantidadUsuario;
    mostrarSaldoEnPantalla();
     }
}

//mostrar saldo en pantalla//
function mostrarSaldoEnPantalla() {
    document.getElementById("mostrarSaldo").textContent= "tu saldo es de $" + saldo.toFixed(2);
}





