let valor_ticket=200;
let categoría= ["estudiante","trainee", "junior"];
let descuento=[0.2,0.5,0.85];
function pagar_total(cant,categ){
          return cant*valor_ticket*descuento[categ];
}
function resumen(){

}

console.log(pagar_total(3,0));