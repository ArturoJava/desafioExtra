var nombre =prompt("Cual es tu nombre? ");
var edad =prompt("Cuantos años tienes? ");
var lenguaje =prompt("Que lenguaje  de Programacion estas Estudiando? ");
alert ("Hola "+nombre+" tienes "+edad+" años y ya estas aprendiendo "+lenguaje+" !");
var respuesta =prompt ("te gusta estudiar "+lenguaje+" ? Responde con el numero1 para SI o 2 para NO. " );
if(respuesta=='1'){
    alert ("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
}
if(respuesta=='2'){
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}
