var persona = "Leonardo";
console.log(persona);
function myFunction() {

    let cantidad =  document.getElementById("cantidaticket").value;

    let categoria = document.getElementById("cate");
    let categoria2 = categoria.options[categoria.selectedIndex].text;

    console.log(categoria2);    
    console.log(cantidad);

    let numero= parseInt(cantidad);
    let valor;
    if ( isNaN(numero)){
        alert("En cantidad solo ingresar valores enteros");
    }else{
        //alert("Entro al Else");
        switch (categoria2) {
               case "Trainee":
                   valor = parseInt(cantidad)*200*0.5;
                    document.getElementById("ptotal").innerHTML= "Total a Pagar: $"+valor;
                    break;
              case "Estudiante":
                   valor = parseInt(cantidad)*200*0.2; 
                   document.getElementById("ptotal").innerHTML= "Total a Pagar: $"+valor;
                   break;
             case "Junior":
                   valor = parseInt(cantidad)*200*0.85; 
                   document.getElementById("ptotal").innerHTML = "Total a Pagar: $"+valor;
                   break;
             default:
                   break;
        }/* fin del switch */
   }/* fin del else */
   console.log(valor);
}/* fin funcion */

