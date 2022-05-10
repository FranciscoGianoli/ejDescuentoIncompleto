let monto = <HTMLInputElement>document.getElementById("monto");
let cantidad = <HTMLInputElement>document.getElementById("cantidad");
let mes = <HTMLInputElement>document.getElementById("mes");
let btnEnviar =<HTMLElement>document.getElementById("btnEnviar");

mes.innerHTML= "Ingresar mes";
cantidad.innerHTML= "Ingresar cantidad";
mes.innerHTML="Ingresar mes";

btnEnviar.addEventListener("click" , () =>{ 
   let monto = Number(monto.value);
  let cantidad = Number(cantidad.value);
  let  mes = mes.value;
 let montoConDescuento : number ;
  let descuento : number ;
 let precioTotal : number = monto * cantidad;
  
  if (mes == "Octubre") {
    descuento = (precioTotal*15)/100
    montoConDescuento = precioTotal - descuento;
    console.log("Por comprar en el mes de Octubre Ud tiene un 15% de descuento");
    console.log("El monto a pagar es: " + montoConDescuento);
    } else {
    console.log("Ud. no tiene descuento, el monto a pagar es:" + precioTotal)
});



//... funcionalidad de ingreso de datos ...
/*rotulo1.innerHTML = "Ingresar monto: ";
rotulo2.innerHTML = "Ingresar cantidad: ";
rotulo3.innerHTML = "Ingresar mes: ";

let monto : number = dato1.value;
let montoConDescuento : number = 0;
let descuento : number = 0;
let cantidad : number = dato2.value;
let precioTotal : number = monto * cantidad;
let mes : number = dato3.value;
if (mes == "Octubre") {
descuento = (precioTotal*15)/100
montoConDescuento = precioTotal - descuento;
console.log("Por comprar en el mes de Octubre Ud tiene un 15% de descuento");
console.log("El monto a pagar es: " + montoConDescuento);
} else {
console.log("Ud. no tiene descuento, el monto a pagar es:*/