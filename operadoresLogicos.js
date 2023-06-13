/*
    && and 
    || or
    ! not 
*/
//ejemplo 1
const nombre = 'Giovanni';
const edad = 17;
const tieneEntrada = true;
const tienePermiso = true;

// const permitirAcceso = edad >= 18 && tieneEntrada;
// console.log('Accedo permitido: ' + permitirAcceso);

//ejemplo 2

const permitirAcceso = (edad >=18 && tieneEntrada) || (tienePermiso && tieneEntrada); 
console.log('Accedo permitido: ' + permitirAcceso);

//ejemeplo 3 lo que hace es invertir todo 
const variable = false;
console.log(!variable);