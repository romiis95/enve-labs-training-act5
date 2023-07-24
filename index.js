//se creo una funcion que se imprime por consola nombre y apellido.
function imprimirNombreApellido(objeto) {
    if (objeto && objeto.nombre && objeto.apellido) {
        console.log(`${objeto.nombre} ${objeto.apellido}`); // se utilizo la plantilla de cadena en esta linea 
    } else {
        console.log("El objeto no tiene las propiedades 'nombre' y 'apellido'.");
    }
}
const persona = {
    nombre: "Romina",
    apellido: "Rodriguez",
    edad: "28",
    presentarse: () => {
        return "Hola, mi nombre es " + persona.nombre + " y tengo " + persona.edad + " años.";
    }
};

console.log(persona.presentarse());
//imprime el  "Hola, mi nombre es Romina y tengo 28 años."

//funcion que recibe un parametro 
function asignarColorRojo(objeto) {
    objeto.color = "rojo";
}

const miObjeto = {
    marca: 'fiat', 
    modelo: 'uno'
};

asignarColorRojo(miObjeto);

console.log(miObjeto.color); 

console.log(miObjeto.marca); 
console.log(miObjeto.modelo);

//LA funcion sumarPesos recorre el array "autos" utilizando un bugle for
function sumarPesos(autos) {
    let sumaPesos = 0;
    for (let auto of autos) {
        sumaPesos += auto.peso;
    }
    return sumaPesos;
}

let autos = [
    {marca: 'fiat', modelo: 'uno', peso: 1200},
    {marca: 'toyota', modelo: 'hilux', peso: 2000},
    {marca: 'ford', modelo: 'fiesta', peso: 1300},
];

console.log(sumarPesos(autos)); //devolvera la suma de 4500 (1200 + 2000 + 1300)