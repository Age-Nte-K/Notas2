//EJERCICIO 1

//  ----*** 👔 CLOTHES CHECKPOINT 👔 ***----
//
// Felicitaciones por llegar a esta instancia! El checkpoint que realizarás a continuación
// consistirá en resolver varios problemas que surgieron en una tienda de ropa/indumentaria.
// Tendrás que resolver cada uno de ellos, aplicando los conceptos aprendidos durante el Módulo Uno.
// 🍀 Suerte!!! 🍀
//
//
// 1️⃣ ***** EJERCICIO 1 QUEUE ***** - guardarCamisetas 1️⃣
// 
// Ha llegado un camión con un nuevo lote de camisetas, es necesario recoger todas y guardarlas en dentro de la tienda.
// Para esto tendrás que implementar la función guardarCamisetas, la cuál recibirá por parámetros una queue con muchas
// 👕 Camisetas 👕 que se tendrán que guardar en un objeto que nos servirá como contenedor.
//
// EJEMPLOS:
// Dada la siguiente queue (INPUT):
// ["Camiseta Blanca", "Camiseta Negra", "Camiseta Azul", "Camiseta Amarilla", "Camiseta Roja"]
// guardarCamisetas() Devuelve (OUTPUT) ➡ 
// {
//  Camiseta Blanca: Camiseta Blanca,
//  Camiseta Negra: Camiseta Negra,
//  Camiseta Amarilla: Camiseta Amarilla,
//  Camiseta Roja: Camiseta Roja
// }
//
// REQUISITOS:
//  🟢 Respetar el principio de FIFO que corresponde a las queues a la hora de guardar las camisetas
//  🟢 Retornar un objeto, que tendrá como key value, los elementos que agregas y quitas de la queue
//  🟢 SI O SI necesitás utilizar una queue!
// TIP: Chequear el archivo DS.js para ver la función constructora Queue, y ver sus métodos disponibles.

function guardarCamisetas(queue) {
    // Tu código aquí:
    let obj = {};

    while (queue.size()) {

        let camiseta = queue.dequeue();            //camiseta es un metodo que elimina el primer elemento

        obj[camiseta] = camiseta;          //Agregamos la camiseta extraída como una propiedad del obj. Agrego como propiedad a obj la misma clave y valor. su valor es igual a su clave.
    }
    return obj;
};


//EXPLICACION LOGICA
// Declaramos una variable obj que será utilizada para almacenar las camisetas extraídas de la cola.
// Iniciamos un bucle while que se ejecutará mientras la cola ropaQueue tenga elementos (es decir, su tamaño sea mayor que cero).
// Extraemos el elemento de la cola ropaQueue utilizando el método dequeue() y lo asignamos a una variable llamada camiseta.
// Agregamos la camiseta extraída como una propiedad del objeto obj, y le asignamos el mismo valor que su clave.
// Continuamos en el bucle while hasta que la cola esté vacía.
// Cuando el bucle haya terminado, devolvemos el objeto obj que contiene todas las camisetas extraídas de la cola.




//OTRA MANERA G
function guardarCamisetas(queue) {
  // Crear un objeto vacío que servirá como contenedor de las camisetas
  const camisetas = {};

  // Iterar sobre la queue y guardar cada camiseta en el objeto contenedor
  while (!queue.isEmpty()) {
    const camiseta = queue.dequeue();
    camisetas[camiseta] = camiseta;
  }

  // Devolver el objeto contenedor de las camisetas
  return camisetas;
}

// Ejemplo de uso:
const camisetasQueue = new Queue();
camisetasQueue.enqueue("Camiseta Blanca");
camisetasQueue.enqueue("Camiseta Negra");
camisetasQueue.enqueue("Camiseta Azul");
camisetasQueue.enqueue("Camiseta Amarilla");
camisetasQueue.enqueue("Camiseta Roja");

console.log(guardarCamisetas(camisetasQueue)); // { "Camiseta Blanca": "Camiseta Blanca", "Camiseta Negra": "Camiseta Negra", "Camiseta Azul": "Camiseta Azul", "Camiseta Amarilla": "Camiseta Amarilla", "Camiseta Roja": "Camiseta Roja" }

// Explicación:

// Luego se define la función guardarCamisetas que recibirá una queue como parámetro.
// Se crea un objeto vacío camisetas que servirá como contenedor de las camisetas.
// Se itera sobre la queue usando un ciclo while y se va sacando cada camiseta con el método dequeue.
// Se guarda cada camiseta en el objeto contenedor camisetas con la sintaxis camisetas[camiseta] = camiseta.la sintaxis "camisetas[camiseta]" se utiliza para
// acceder a un elemento específico de una matriz (array) llamada "camisetas". El valor de "camiseta" se utiliza como índice para especificar el elemento que se desea acceder en la matriz.
// Finalmente se devuelve el objeto contenedor camisetas.
// En el ejemplo de uso se crea una queue con algunas camisetas, se llama a la función guardarCamisetas con esa queue y se muestra por consola el objeto contenedor resultante.


//EJERCICIO 2
//
// 2️⃣ ***** EJERCICIO 2 STACK***** - apilarPantalones() 2️⃣ 
// 
// Un cliente ha solicitado pantalones de una talla determinada. Es necesario ir a buscar al inventario los pantalones y obtener
// las prendas solicitadas según su talla
// Para esto, tendrás que implementar la función 👖 apilarPantalones 👖, la cual recibirá por parámetros un arreglo
// conteniendo multiples tallas, además de un número de talla a solicitar. Deberás retornar un objeto, el cual contendrá una nueva pila
// con los pantalones solicitados y el arreglo anterior con los pantalones restantes
// EJEMPLOS:
// Dado el siguiente arreglo (INPUT): [37, 38, 38, 39, 41, 36, 41, 41, 37, 42]
// apilarPantalones(arreglo, 38) Devuelve (OUTPUT) ➡
// {
//   pantalonesEncontrados: Stack([38, 38]),
//   pantalonesRestantes: Stack([37, 39, 41, 36, 41, 41, 37, 42])
// }
// REQUISITOS:
//  🟢 Respetar el principio de LIFO que tienen los stacks
//  🟢 Retornar un objeto que contenga:
//  - Una propiedad "pantalonesEncontrados" que sea un stack que contenga los pantalones con la talla solicitada
//  - Una propiedad "pantalonesRestantes" que sea un stack que contenga los pantalones restantes
//  🟢 Retornar false si el stack viene vacío

//OTRA MANERA G
function apilarPantalones(arreglo, tallaSolicitada) {

  if (arreglo.length === 0) {
  return false;
  }
  
  const pantalonesEncontrados = new Stack();
  const pantalonesRestantes = new Stack();
  
  for (let i = 0; i < arreglo.length; i++) {
  const talla = arreglo[i];
  
  if (talla === tallaSolicitada) {
  pantalonesEncontrados.push(talla);
  
} else {
  pantalonesRestantes.push(talla);
  }
  }
  
  return {
  pantalonesEncontrados,
  pantalonesRestantes,
  };

  }
  
  // Ejemplo de uso:
  const arreglo = [37, 38, 38, 39, 41, 36, 41, 41, 37, 42];
  const resultado = apilarPantalones(arreglo, 38);
  console.log(resultado);
  // {pantalonesEncontrados: Stack(2) [38, 38], pantalonesRestantes: Stack(8) [37, 39, 41, 36, 41, 41, 37, 42]}


//EXPLICACION

//     La función apilarPantalones recibe como parámetros un arreglo llamado arreglo y un número llamado talla.

// Se crea un stack vacío llamado pantalonesEncontrados y otro stack vacío llamado pantalonesRestantes.

// Se recorre el arreglo desde el final al principio utilizando un bucle for.

// Si el elemento actual es igual a la talla solicitada, se apila en pantalonesEncontrados.
// Si el elemento actual no es igual a la talla solicitada, se apila en pantalonesRestantes.
// Si el stack pantalonesRestantes está vacío, se retorna false.

// Si el stack pantalonesRestantes no está vacío, se crea un objeto llamado resultado que contiene las propiedades:

// pantalonesEncontrados con el stack pantalonesEncontrados
// pantalonesRestantes con el stack pantalonesRestantes
// Se retorna el objeto resultado.





//OTRA MANERA

// function apilarPantalones(array, talla) {
//   // Tu código aquí:

//   let newArray= array.reverse()
//   let encontrados= new Stack();
//   let restantes= new Stack();
   
//   while(array.length > 0){

//     let pantalon = newArray.pop()

//     if(pantalon === talla){
//       encontrados.push(pantalon)
//     }

//     else{
//       restantes.push(pantalon)
//     }
//   }


//   let obj= {}
//   obj['pantalonesEncontrados']= encontrados
//   obj['pantalonesRestantes']= restantes

//   if(encontrados.size() === 0 && restantes.size() === 0){
//     return false
  
//   }else{
//     return obj
//   }
// };



//EXPLICACION LOGICA
// Crea un objeto pantalones que contiene dos pilas vacías: pantalonesEncontrados y pantalonesRestantes.

// Itera a través del array "array" y verifica si el valor del elemento en el índice actual coincide con la talla que se pasa como segundo parámetro.

// Si es así, agrega el valor a la pila pantalonesEncontrados.

// Si no coincide con la talla, agrega el valor a la pila pantalonesRestantes.

// Verifica si la pila pantalonesEncontrados tiene algún elemento. Si no hay pantalones de la talla especificada, la función devuelve false.

// Si hay pantalones de la talla especificada, la función devuelve el objeto pantalones con las dos pilas pantalonesEncontrados y pantalonesRestantes.

// En resumen, esta función toma un array de pantalones y una talla específica, y devuelve un objeto que contiene dos pilas: una pila de pantalones de la talla especificada y otra pila de pantalones que no son de la talla especificada.












//EJERCICIO 3
// 3️⃣ ***** EJERCICIO 3 CLOSURES***** - chequearDisponibilidad() 3️⃣
// Implementar la función chequearDisponibilidad(), la cuál recibirá inicialmente por parámetros
// un arreglo con prendas de ropa.
// Después podrá ser nuevamente invocada, recibiendo por parámetros un arreglo de las prendas disponibles para vender
// Debes retornar el mensaje correspondiente dependiendo de cuantas prendas hayan disponibles, o
// si no hay ninguna retornar "No se encontraron las prendas solicitadas"

// EJEMPLOS:
// Se solicitan las siguientes prendas: ["Camiseta Verde", "Pantalón Rojo", "Gorra Azul"]
// Y a continuación está disponible el siguiente stock: ["Pantalón Rojo", "Zapatos Grises", "Gorra Azul"]
// chequearDisponibilidad(prendas)(stock) Devuelve ➡
//  "2 de las 3 prendas solicitadas se encuentran en stock"

// O si probamos con otras prendas para solicitar: ["Pantalón Rojo", "Sweater Celeste"]
// chequearDisponibilidad(prendas2)(stock) Devuelve ➡
// "1 de las 2 prendas solicitadas se encuentran en stock"

// REQUISITOS:
//   Retornar un mensaje que indique la cantidad de prendas disponibles acorde al stock
//   Retornar "No se encontraron las prendas solicitadas" si no se encontró disponibilidad
//   Retornar "Todas las prendas fueron encontradas" si las prendas solicitadas se encontraron
//
// ACLARACIÓN: Chequear el output de los test, para poder colocar los mensajes como corresponden!


function chequearDisponibilidad(ropas) {

  let counter= 0;

  let comparar= function(stock){

    for(let i=0;i<ropas.length;i++){

      for(let j=0;j<stock.length;j++){
        
        if(ropas[i]===stock[j]) 
        counter++
      }
    }

    if(counter === 0) return 'No se encontraron las prendas solicitadas';
    if(counter === ropas.length) return 'Todas las prendas fueron encontradas';
    if(counter !== ropa.length) return `${counter} de las ${ropa.length} prendas solicitadas se encuentran en el stock`
  }
  
  return comparar
}

console.log(chequearDisponibilidad(["Pantalón Rojo", "Gorra Azul"]) (["Pantalón Rojo", "Gorra Azul"]))
console.log(chequearDisponibilidad(["Camiseta Verde", "Pantalón Rojo", "Gorra Azul"])(["Pantalón Rojo", "Zapatos Grises", "Gorra Azul"]))
console.log(chequearDisponibilidad(["Pantalón Rojo", "Zapatos Grises", "Gorra Azul"])(["Pantalón Rojo", "Zapatos Grises", "Gorra Azul"]))






//OTRA SOLUCION G
//FUNCIONA

function chequearDisponibilidad(ropas) {
    // Tu código aquí:
    return function(stock) {
        
      if (stock.length === 0) return "No se encontraron las prendas solicitadas";

        let cantDisponibles = 0;
        
        for (let i = 0; i < ropas.length; i++) {
            for (let j = 0; j < stock.length; j++) {
                if (ropas[i] === stock[j]) {
                    cantDisponibles++;
                    break;
                }
            }
        }
        
        if (cantDisponibles === ropas.length) return "Todas las prendas fueron encontradas";
        
        if (cantDisponibles > 0) {
            return cantDisponibles + " de las " + ropas.length + " prendas solicitadas se encuentran en el stock";
        
          } else {
            return "No se encontraron las prendas solicitadas";
        }
    };
}

//PRUEBAS
const prendasSolicitadas = ["Camiseta Verde", "Pantalón Rojo", "Gorra Azul"];
const stockDisponible = ["Pantalón Rojo", "Zapatos Grises", "Gorra Azul"];

const mensaje = chequearDisponibilidad(prendasSolicitadas)(stockDisponible);

console.log(mensaje); // "2 de las 3 prendas solicitadas se encuentran en stock"


//EXPLICACION LOGICA
// La función chequearDisponibilidad toma un array ropas como argumento y devuelve otra función que toma un array stock como argumento.
// Si el array stock está vacío, la función devuelve el mensaje "No se encontraron las prendas solicitadas".
// La función utiliza un contador cantDisponibles para contar la cantidad de prendas que están disponibles en el stock.
// Se utiliza un bucle for anidado para comparar cada elemento del array ropas con cada elemento del array stock.
// Si una prenda de ropas está disponible en stock, incrementamos el contador cantDisponibles y salimos del bucle interno con la instrucción break.
// Si se encontraron todas las prendas de ropas en el stock, la función devuelve el mensaje "Todas las prendas fueron encontradas".
// Si se encontraron algunas, pero no todas las prendas de ropas en el stock, la función devuelve un mensaje que indica cuántas prendas de las solicitadas se encontraron.
// Si ninguna de las prendas de ropas se encontró en el stock, la función devuelve el mensaje "No se encontraron las prendas solicitadas".
// En resumen, la función chequearDisponibilidad devuelve una función que toma un array stock como argumento y verifica si todas las prendas del array ropas están presentes en el array stock. En función de esto, se devuelve un mensaje que indica si se encontraron todas las prendas, algunas de las prendas o ninguna de las prendas.




//EJERCICIO 4
//  ***** EJERCICIO 4 RECURSIÓN***** - atenderClientes() 
//
//
// Implementar la función  atenderClientes() , la cual recibirá por parámetros un objeto
// de clientes que estarán esperando ser atendidos. Recursivamente debes eliminar los clientes hasta dejar el objeto vacío
//
//
// EJEMPLOS:
// Dado el siguiente objeto de clientes:
// {
//  1: "Franco",
//  2: "María",
//  3: "Alejo"
// }
//
// atenderClientes(clientes) Devuelve ➡ {}
//
// REQUISITOS:
//   Vaciar recursivamente el objeto de clientes y retornar el objeto vacío
// 
// Tip: Podés usar el operador delete para los objetos.

//FUNCIONA

function atenderClientes(clientes) {
    // Tu código aquí:
    for (const key in clientes) {
        delete clientes[key];
    }
    return clientes;
}

//EXPLICACION LOGICA
// La función atenderClientes tiene como objetivo vaciar el objeto clientes recibido como argumento. Paso a paso:
// Aquí se define la función atenderClientes que recibe un objeto clientes como parámetro.
// Se utiliza un bucle for..in para recorrer todas las propiedades del objeto clientes. La variable key se usa para representar cada una propiedades del objeto.
// Dentro del bucle, se utiliza el operador delete para eliminar cada una de las propiedades del objeto clientes.
// Por último, se retorna el objeto clientes después de haber eliminado todas sus propiedades.
// En resumen, la función atenderClientes elimina todas las propiedades del objeto clientes y luego retorna el objeto vacío.


//FUNCIONA
function atenderClientes(clientes) {

    // Caso base: el objeto de clientes está vacío
    if (Object.keys(clientes).length === 0) {
      return clientes;
    }
    
    // Caso recursivo: eliminar el primer cliente y llamar a la función nuevamente
    delete clientes[Object.keys(clientes)[0]];
    return atenderClientes(clientes);
  }


//PRUEBAS

const clientes = {
    1: "Franco",
    2: "María",
    3: "Alejo"
  };
  
  const clientesAtendidos = atenderClientes(clientes);
  
  console.log(clientesAtendidos); // {}



//EXPLICACION
// Explicación del código:

// La función atenderClientes() recibe un objeto de clientes y utiliza la función Object.keys() para obtener un arreglo con las claves (en este caso, los números de cliente) del objeto.
// En el caso base, se verifica si el objeto de clientes está vacío (es decir, si el arreglo de claves tiene longitud cero). En ese caso, se retorna el objeto tal como está.
// En el caso recursivo, se utiliza el método delete para eliminar el primer cliente (es decir, el primer elemento del objeto) y se llama a la función atenderClientes() nuevamente con el objeto modificado. 
// El proceso se repite hasta que el objeto esté vacío.
// En cada llamada recursiva, se retorna el resultado de la siguiente llamada.




//EJERCICIO 5 
//  ***** EJERCICIO 5 RECURSIÓN***** - liquidacion() 
// //
// Implementar la función  liquidacion()  la cuál recibirá por parámetros un array de objetos anidados que
// Representarán algunas prendas de ropa en una vidriera, cada una podrá contener, o no, una etiqueta que indique su estado.
// Tendrás que recursivamente iterar el array, y retornar uno nuevo, sólo con los objetos que tengan la etiqueta "LIQUIDACION" asociada.

// EJEMPLOS:
//  Dado el siguiente arreglo: [{ camiseta: { LIQUIDACION: true } }, { gorro: { DESCUENTO: true } }, { abrigo: {} }, { pantalones: { LIQUIDACION: true } }]
//  liquidacion() Devuelve ➡
//  [{ pantalones: { LIQUIDACION: true } }, { camiseta: { LIQUIDACION: true } }]

// REQUISITOS:
//  Retornar un nuevo arreglo que contenga las prendas de ropa en LIQUIDACION
//  Implementar recursividad!
//  Si el arreglo está vacío, retornar un mensaje que diga "No hay prendas en liquidación"

// CUIDADO:  las prendas tiene que ir agregandose de derecha a izquierda como se muestra en el ejemplo de mas arriba.

// TIP: tambien podes usar un rest parameter.

//FUNCIONA

function liquidacion(array, prendas = []) {
    // Tu código aquí:
    let prenda = array[0];

    if (array.length === 0) return prendas.reverse();

    for (const key in prenda) {

        if (prenda[key].hasOwnProperty("LIQUIDACION")) {
            prendas.push(prenda);
        }
    }

    array.shift();
    return liquidacion(array, prendas); //return  prendas.concat(liquidacion(array, prendas));    
}

//PRUEBAS

let prendas = [{ camiseta: { LIQUIDACION: true } }, { gorro: { DESCUENTO: true } }, { abrigo: {} }, { pantalones: { LIQUIDACION: true } }]

let prendasEnLiquidacion = liquidacion(prendas)




//EXPLICACION LOGICA
// La función liquidacion tiene como objetivo filtrar un array de objetos que contengan una propiedad "LIQUIDACION" y retornar un nuevo array solo con estos objetos. 
//Paso por paso:
// Aquí se define la función liquidacion que recibe dos parámetros: array que es el array original que se desea filtrar y prendas que es un array vacío donde se irán almacenando los objetos que contienen la propiedad "LIQUIDACION".
// Se define una variable prenda que tomará el primer objeto del array original para ser evaluado en el bucle for..in.
// Si el array original está vacío, la función devuelve el array prendas invertido (ordenado al revés) utilizando el método reverse().
// Dentro del bucle for..in, se evalúa cada propiedad del objeto prenda. Si una de las propiedades es "LIQUIDACION", se agrega el objeto prenda al array prendas utilizando el método push().
// Después del bucle for..in, se elimina el primer objeto del array original utilizando el método shift().
// Por último, se hace una llamada recursiva a la función liquidacion pasando como argumentos el array original actualizado sin el primer objeto y el array prendas actualizado con los objetos que contienen la propiedad "LIQUIDACION". Esta llamada recursiva se repetirá hasta que el array original quede vacío y luego se devolverá el array prendas invertido.
// En resumen, la función liquidacion evalúa cada objeto del array original en busca de la propiedad "LIQUIDACION" y los agrega a un nuevo array prendas. Esto se hace utilizando una llamada recursiva hasta que el array original quede vacío y luego se devuelve el array prendas invertido


//DUDOSO
//OTRA MANERA G
function liquidacion(...prendas) {
    
  if (prendas.length === 0) {
      return "No hay prendas en liquidación";
    }
    
    const currentPrenda = prendas[0];
    
    if (typeof currentPrenda === "object" && currentPrenda !== null && currentPrenda.hasOwnProperty("LIQUIDACION")) {
      return [currentPrenda, ...liquidacion(...prendas.slice(1))];
    
    } else {
      return liquidacion(...prendas.slice(1));
    }
  }


//EXPLICACION
// La función liquidacion utiliza un rest parameter (...prendas) para aceptar un número variable de argumentos y así permitir el paso de un arreglo de objetos como parámetro.
// Luego, se comprueba si el arreglo de prendas está vacío, en ese caso se retorna un mensaje que indica que no hay prendas en liquidación.
// Si no está vacío, se toma el primer objeto del arreglo (const currentPrenda = prendas[0]) y se verifica si tiene la propiedad LIQUIDACION. En caso de tenerla, se agrega ese objeto al arreglo que se está construyendo y se llama recursivamente a la función liquidacion pasándole el resto del arreglo (...prendas.slice(1)). Si no tiene la propiedad LIQUIDACION, simplemente se llama recursivamente a la función liquidacion pasándole el resto del arreglo.
// Finalmente, la función retorna el arreglo de prendas en liquidación construido de forma recursiva.
// "rest parameter"  permite a una función aceptar un número variable de argumentos como un array. La sintaxis del parámetro de descanso es utilizar tres puntos (...) seguidos de un nombre de variable que se utilizará para almacenar los argumentos adicionales que se pasan a la función. El parámetro de descanso es especialmente útil cuando no se sabe de antemano cuántos argumentos se pasarán a una función. También puede ser utilizado junto con otros parámetros en una función. Sin embargo, es importante tener en cuenta que el parámetro de descanso debe ser el último parámetro en la lista de parámetros de la función,
//El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.


//PRUEBAS







//EJERCICIO 6
//  ***** EJERCICIO 6 ALGORITMOS***** - ordenarRopa() 6
// Se desordenó todo el inventario de ropa! hay prendas por todas partes.


// Por el momento tendremos que solucionar el problema creando la función  ordenarRopa() , la cual recibirá por parámetros
// un array de objetos anidados, que representarán cada prenda. Cada objeto tendrá dentro una propiedad nombre y un precio entero.
// Tendrás que implementar un algoritmo de ordenamiento para poder organizar toda la ropa de MAYOR a MENOR según el precio.


// EJEMPLOS:
// Dado el siguiente arreglo:
// [{ nombre: 'Camiseta', precio: 12}, { nombre: 'Pantalon', precio: 2 }, { nombre: 'Saco', precio: 23 }, { nombre: 'Gorra', precio: 4 }]

// ordenarRopa(array) Devuelve ➡
// [{ nombre: 'Saco', precio: 23 }, { nombre: 'Camiseta', precio: 12 }, { nombre: 'Gorra', precio: 4 }, { nombre: 'Pantalon', precio: 2 }]

// REQUISITOS:
//   Implementar algún algoritmo de ordenamiento para ordenar el arreglo de MAYOR a MENOR
//   NO utilizar el método sort de array!



function ordenarRopa(ropa) {
  
  for(var i=0;i<ropa.length;i++){

    for(j=i+1;j<ropa.length;j++){

      let aux= ropa[j]

      if(aux['precio'] < ropa[i]['precio']){

        ropa[j]=ropa[i];
        ropa[i]=aux;
      }
    }
  }
  return ropa.reverse()

}

//EXPLICACION LOGICA
// La función ordenarRopa toma como entrada un arreglo de objetos, donde cada objeto representa una prenda de vestir y tiene dos propiedades: nombre y precio. El objetivo de la función es ordenar el arreglo de prendas de vestir en orden ascendente según su precio.
// La función utiliza un algoritmo de ordenamiento de burbuja (bubble sort) para lograr esto. Este algoritmo funciona comparando elementos adyacentes del arreglo y si están en el orden incorrecto, los intercambia. Este proceso se repite hasta que no hay más intercambios necesarios, lo que indica que el arreglo está ordenado.
// En el caso de la función ordenarRopa, el primer bucle for se utiliza para recorrer todo el arreglo de ropa. El segundo bucle for se utiliza para comparar el elemento actual con el resto de los elementos del arreglo. Si se encuentra un elemento con un precio menor que el precio del elemento actual, se intercambian los elementos.
// Finalmente, la función devuelve el arreglo ordenado en orden ascendente. La función también invierte el arreglo utilizando el método reverse() antes de devolverlo, para que las prendas de vestir estén en orden descendente según su precio.







//OTRA MANERA G
function ordenarRopa(array) {
  let n = array.length;

  for(let i = 0; i < n-1; i++) {
    for(let j = 0; j < n-i-1; j++) {
      if(array[j].precio < array[j+1].precio) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }

  return array;
}

//EXPLICACION
// podemos implementar el algoritmo de ordenamiento de burbuja. Este algoritmo compara cada elemento adyacente del array y los intercambia si están en el orden equivocado. Se repite este proceso hasta que todo el array esté ordenado.
// Se define la función ordenarRopa que recibe como parámetro un array de objetos anidados que representan cada prenda.
// Se define una variable n que toma el valor del tamaño del array.
// Se utiliza un bucle anidado para iterar sobre cada elemento del array y comparar los precios de las prendas adyacentes. Si el precio de la prenda actual es menor que el precio de la siguiente prenda, se intercambian las posiciones de las prendas en el array utilizando una variable temporal temp.
// Se devuelve el array de prendas ordenado de mayor a menor según su precio.
// En resumen, la función ordenarRopa utiliza el algoritmo de ordenamiento burbuja para ordenar los objetos del array de prendas de mayor a menor según su precio. Este algoritmo compara los precios de cada prenda adyacente y las intercambia de posición si la prenda actual tiene un precio menor que la siguiente prenda.




//EJERCICIO 7 
//  ***** EJERCICIO 7 ***** - LinkedList.migrarStock() 
//  La tienda de ropa necesita migrar sus datos de stock de una lista a un objeto.
//  Para esto deberás agregar al prototype de LinkedList el método  migrarStock() , el cual deberá retornar todos los valores almacenados
//  de la lista en un nuevo objeto con formato nombre:stock.
//
// EJEMPLOS:
//  Dada la siguiente lista:
//
// ({nombre: 'Camisetas'}, stock: 22) ➡ ({nombre:'Pantalones', stock: 12}) ➡ ({nombre:'Zapatos', stock: 45}) ➡ ({nombre: 'Bufandas', stock: 12}) ➡ ({nombre: 'Sacos', stock: 4})
//
// lista.migrarStock() devuelve ➡
// {Camisetas: 22, Pantalones: 12, Zapatos: 45, Bufandas: 12, Sacos: 4}
//
//
// REQUISITOS:
//  Retornar un objeto con la prenda de ropa y su stock a modo de clave/valor mostrado en el ejemplo arriba
//  Si la lista está vacía retornar un mensaje que diga exactamente: "No hay stock para migrar"



//Recibo una LinkedList debo retornar un objeto con los valores de la lista en formato propiedad y valor

LinkedList.prototype.migrarStock = function() {


  let obj = {}
  let current = this.head;
  
  if(!current) return "No hay stock para migrar";
  
  while(current){
  
    let prop = current.value.nombre;       //Accedo a valor de nombre
    let value = current.value.stock;       //Accedo a valor de stock
  
    obj[prop] = value;                    //Asigno formato propiedad y valor
    current = current.next;               //Paso al siguiente nodo para seguir realizando la operacion
  }
  
  return obj;
  
  }

// //EXPLICACION LOGICA
// Esta función es un método personalizado agregado a la clase LinkedList, que se encarga de crear un objeto con las propiedades de nombre y valores de stock de cada nodo de la lista enlazada.
// La función comienza verificando si la lista enlazada está vacía. Si la lista enlazada está vacía, la función devuelve una cadena que indica que no hay stock para migrar.
// Luego, la función declara un objeto vacío llamado "obj" que se utilizará para almacenar las propiedades de nombre y valores de stock de cada nodo en la lista enlazada.
// A continuación, la función utiliza un bucle while para iterar sobre los nodos de la lista enlazada. Para cada nodo en la lista, la función obtiene el valor del nombre de la prenda y el valor de stock y los agrega como una propiedad y valor del objeto "obj" utilizando el valor del nombre como la clave.
// Una vez que se han procesado todos los nodos de la lista enlazada, la función devuelve el objeto "obj" con las propiedades de nombre y valores de stock de cada nodo.
// En resumen, esta función toma la información almacenada en cada nodo de la lista enlazada y la convierte en un objeto con formato de propiedad y valor.




//OTRA MANERA G
LinkedList.prototype.migrarStock = function() {
  if (this.head === null) {
    return "No hay stock para migrar";
  }

  let current = this.head;
  let stockObj = {};

  while (current !== null) {
    stockObj[current.value.nombre] = current.value.stock;
    current = current.next;
  }

  return stockObj;
}

//EXPLICACION
// La función primero verifica si la lista está vacía. Si es así, se retorna el mensaje correspondiente. 
// En caso contrario, se inicializa una variable stockObj como un objeto vacío y se recorre la lista con un bucle while. 
// Por cada nodo, se obtiene el nombre y el stock de la prenda y se agrega como una clave/valor en el objeto stockObj. 
//Finalmente, se retorna el objeto stockObj con los datos de stock de todas las prendas de la lista.





//EJERCICIO 8 
//  ** EJERCICIO 8 LINKEDLIST** - tacharLista() 8
// 
// Llegó la hora de revisar el catálogo de ropa disponible! tendremos que tachar las que hayan se hayan agotado
// el stock
// Agregar al prototype de LinkedList el método  tacharLista()  el cuál recibirá por parámetros un array de strings,
// Tendrás que retornar una nueva lista en base a las prendas que hay en el array.
// Es decir, tendrás que agregar a la nueva lista los elementos que NO coincidan en la lista actual con el array.
//
// EJEMPLOS:
// Dada la siguiente lista de strings:
// ('Pantalon') ➡ ('Zapatos') ➡ ('Camisa') ➡ ('Calcetines') ➡ ('Gafas') ➡ ('Sweater') ➡
//
// Y dado el siguiente array por parámetros: ['Gafas', 'Zapatos']
// lista.tachar(array): Devuelve ➡
// ('Pantalon') ➡ ('Camisa') ➡ ('Calcetines') ➡ ('Sweater') ➡
//
// REQUISITOS:
//  Retornar una NUEVA LinkedList en base a los elementos del arreglo recibido por parámetros.
//  Si el arreglo viene vacío retornar la LinkedList COMPLETA.
// Tip: Tanto las LinkedList como los arreglos, contendrán siempre strings.


//FUNCIONA


LinkedList.prototype.tacharLista = function(array) {
    // Tu código aquí:
    if (array.length === 0) return this;
    for (let i = 0; i < array.length; i++) {
        let current = this.head;
        //lista vacia
        if (!current) return this;
        //si la lista tiene un solo nodo
        if (!current.next) {
            if (current.value === array[i]) {
                this.head = null;
            }
        }
        //se busca sobre el primer nodo
        if (current.next) {
            if (current.value === array[i]) {
                this.head = current.next;
            }
        }
        //lista de un nodo o mas
        while (current.next) {
            if (current.next.value === array[i]) {
                if (current.next.next) {
                    current.next = current.next.next;
                } else {
                    current.next = null;
                }
            }
            current = current.next;
        }
    }
    return this;
};


// //EXPLICACION LOGICA
// Esta función es un método personalizado agregado a la clase LinkedList, que se encarga de eliminar los nodos de la lista enlazada cuyo valor coincida con alguno de los valores en un arreglo de valores a eliminar.
// La función comienza con una verificación de que el arreglo de valores no esté vacío. Si está vacío, la función devuelve el objeto LinkedList original sin cambios.
// Luego, la función itera a través del arreglo de valores y para cada valor en el arreglo, itera sobre los nodos de la lista enlazada para encontrar nodos que coincidan con ese valor.
// Si la lista enlazada está vacía, la función devuelve el objeto LinkedList original sin cambios.
// Si la lista enlazada tiene un solo nodo, la función verifica si el valor del nodo coincide con el valor del arreglo y, si es así, establece la cabeza de la lista en nulo.
// Si la lista enlazada tiene más de un nodo, la función busca en el primer nodo si el valor coincide con el valor del arreglo y, si es así, establece la cabeza de la lista en el siguiente nodo.
// Para una lista enlazada con dos o más nodos, la función utiliza un bucle while para buscar nodos que coincidan con el valor del arreglo. Si se encuentra un nodo que coincide con el valor, se establece el "next" del nodo anterior en el "next" del nodo actual, eliminando así el nodo actual de la lista enlazada. Si el nodo actual es el último nodo de la lista, se establece el "next" del nodo anterior en nulo para eliminar el último nodo.
// Una vez que se han procesado todos los valores del arreglo, la función devuelve el objeto LinkedList original, que ahora puede haber sufrido cambios debido a la eliminación de nodos.





//OTRA MANERA G
LinkedList.prototype.tacharLista = function(arr) {
  const newList = new LinkedList();
  let currentNode = this.head;
  while (currentNode !== null) {
    if (!arr.includes(currentNode.value)) {
      newList.addToTail(currentNode.value);
    }
    currentNode = currentNode.next;
  }
  if (newList.isEmpty()) {
    return this;
  }
  return newList;
};


//EXPLICACION
// Crear una nueva LinkedList vacía que almacenará los elementos que no se encuentren en el array recibido.
// Recorrer la lista actual y por cada elemento, verificar si está en el array recibido. Si no está, agregarlo a la nueva LinkedList creada en el paso 1.
// Retornar la nueva LinkedList con los elementos que no se encontraron en el array.
// Si el array recibido está vacío, retornar la lista actual completa.
// En este código, se crea una nueva LinkedList newList que almacenará los elementos que no se encuentren en el array recibido. Luego, se itera sobre la lista actual mediante un bucle while que se detiene cuando se llega al final de la lista. Por cada nodo de la lista, se verifica si su valor está en el array recibido mediante el método includes() de los arrays de JavaScript. Si el valor no está en el array, se agrega a la nueva LinkedList newList. Finalmente, se verifica si la nueva lista está vacía. Si lo está, se retorna la lista original completa. Si no, se retorna la nueva lista newList.



//EJERCICIO 9
//  ***** EJERCICIO 9 BINARYSEARCHTREE***** - BinarySearchTree.obtenerPrendas() 
//
// Te han mandado a recoger una determinada prenda del inventario! Tendrás que buscar sobre el mismo
// Todas las que coincidan con la que te pidieron!
// Para esto tendrás que agregar al prototype de BinarySearchTree, el método 🩳 obtenerPrendas() 🩳, el cuál
// recibirá por parámetros un string, que representará el nombre de las prendas que se necesitan encontrar.
//
//
// EJEMPLOS:
// Dado el siguiente árbol:
//                          { nombre: "Camiseta", num: 13 }
//                          /                           \
//           {nombre: "Zapato", num: 7}          {nombre: "Camiseta", num: 24}
//                       /                               /                 \
//           {nombre: "Pollera", num: 6}   {nombre: "Zapato", num: 16}  {nombre: 27, num: 27}
//                     /                                                     \
//        {nombre: "Zapato", num: 3}                              {nombre: "Zapato", num: 45}
//                      \
//                  {nombre: "Zapato", num: 4}
//
//
//  BinarySearchTree.obtenerPrendas(Zapato) Devuelve ➡
//  ["Zapato", "Zapato", "Zapato", "Zapato"]
//
//  BinarySearchTree.obtenerPrendas(Camiseta) Devuelve ➡
//  ["Camiseta", "Camiseta"]
//
// REQUISITOS:
//   Recorrer el árbol y devolver en un array las prendas que coincidan con la solicitada
// ACLARACIÓN: Dentro del árbol se encuentran objetos, tal como lo muestra el ejemplo más arriba!
// TIP: Podés usar default parameters para ayudarte.

//FUNCIONA

BinarySearchTree.prototype.obtenerPrendas = function(string, array = []) {
    // Tu código aquí:
    this.left && this.left.obtenerPrendas(string, array);
    this.right && this.right.obtenerPrendas(string, array);
    if (this.value.nombre === string) array.push(string);
    return array;
};


//EXPLICACION
// La lógica del método es la siguiente:
// Definir una función auxiliar buscarPrendas que reciba un nodo y un array vacío como parámetros.
// Verificar si el nodo actual es null. Si es así, retornar el array vacío.
// Si el nodo actual tiene un nombre que coincide con la prenda buscada, agregar su nombre al array.
// Llamar a la función buscarPrendas con el nodo de la izquierda y el mismo array.
// Llamar a la función buscarPrendas con el nodo de la derecha y el mismo array.
// Retornar el array con los nombres de las prendas encontradas.
// El método obtenerPrendas() simplemente llamará a la función buscarPrendas() con el nodo raíz del árbol y retornará el resultado. Si el parámetro recibido por el método es un string vacío, se retornará un array vacío.



//OTRA MANERA G
BinarySearchTree.prototype.obtenerPrendas = function(prenda) {
  const prendasEncontradas = [];
  function buscarPrendas(nodo) {
    if (nodo === null) {
      return;
    }
    buscarPrendas(nodo.izquierda);
    if (nodo.valor.nombre === prenda) {
      prendasEncontradas.push(nodo.valor.nombre);
    }
    buscarPrendas(nodo.derecha);
  }
  buscarPrendas(this.raiz);
  return prendasEncontradas;
}



//EXPLICACION LOGICA
// Para resolver este ejercicio, podemos utilizar una estrategia de recorrido en orden (in-order traversal) para recorrer el árbol y obtener las prendas que coincidan con la solicitada.
// El recorrido in-order nos permite visitar los nodos del árbol en orden ascendente, es decir, primero visitando el subárbol izquierdo, luego el nodo actual y finalmente el subárbol derecho.
// Para implementar este recorrido en nuestro método obtenerPrendas, podemos utilizar una función auxiliar recursiva que se encargue de visitar cada nodo del árbol y agregar las prendas que coincidan con la solicitada a un array que se irá construyendo a medida que se avanza en el recorrido.
// En esta solución, la función buscarPrendas es la encargada de realizar el recorrido in-order. En cada llamada recursiva, se verifica si el nodo actual es nulo (caso base) y, en caso contrario, se avanza primero en el subárbol izquierdo, luego se verifica si la prenda del nodo actual coincide con la solicitada y, de ser así, se agrega al array prendasEncontradas. Finalmente, se avanza en el subárbol derecho.
// El método obtenerPrendas simplemente inicializa el array prendasEncontradas, llama a la función buscarPrendas para iniciar el recorrido y retorna el array resultante.



//EJERCICIO 10 
// ***** EJERCICIO 10 BINARYSEARCHTREE***** - BinarySearchTree.vender() 
// Llegó la hora! el primer cliente se dispone a realizar la primera compra de la tienda.
// Para poder vendérsela, tendrás que agregar al prototype de BinarySearchTree, el método  vender() ,
// el cuál recibirá por parámetros un array de prendas a vender.
// Tendrás que recorrer el árbol (que contiene objetos al igual que el ejerecicio previo) y agregar la propiedad 'vendido' como valor true a cada
// uno de los nodos que coincida con los elementos del array. 
// Aclaración: Tanto los nodos del árbol, como los elementos del array, serán valores únicos.

// EJEMPLOS:
// Dado el siguiente árbol:
//                         { nombre: "Camiseta", num: 20 }
//                          /                           \
//           {nombre: "Saco", num: 7}          {nombre: "Abrigo", num: 30}
//                       /                                     \
//         {nombre: "Pantalon", num: 6}               {nombre: "Gorra", num: 42}

// Y dado el siguiente arreglo: ["Gorra", "Pantalon", "Saco"];

//   BinarySearchTree.vender(arreglo) : transforma el árbol en ➡

//                             { nombre: "Camiseta", num: 20 }
//                              /                             \
//        {nombre: "Saco", num: 7, vendido: true}      {nombre: "Abrigo", num: 30 }
//                          /                                       \
// {nombre: "Pantalon", num: 6, vendido: true}            {nombre: "Gorra", num: 42, vendido: true}

// REQUISITOS:
//  Agregar la propiedad "vendido: true" a los nodos que coincidan con alguno de los elementos del array
//  Si el arreglo viene vacío, la función retorna false!


//FUNCIONA

BinarySearchTree.prototype.vender = function(array) {
    // Tu código aquí:
    if (array.length === 0) return false;
    this.left && this.left.vender(array);
    this.right && this.right.vender(array);
    for (let i = 0; i < array.length; i++) {
        if (this.value.nombre === array[i]) {
            array.splice(i, 1);
            this.value.vendido = true;
            break;
        }
    }
    return this;
};

//El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
//Primer parametro ndice donde se comenzará a cambiar el array (con 0 como origen). Si es mayor que la longitud del array, el punto inicial será la longitud del array. Si es negativo, empezará esa cantidad de elementos contando desde el final.
//Segundo parametro Un entero indicando el número de elementos a eliminar del array antiguo.

// //EXPLICACION LOGICA
// Esta función es un método personalizado agregado a la clase BinarySearchTree, que se encarga de marcar como vendidas las prendas de vestir que se encuentran en un arreglo de nombres de prendas.
// La función comienza con una verificación de que el arreglo de prendas no esté vacío. Si está vacío, la función devuelve falso, ya que no se han realizado ventas.
// Luego, la función utiliza recursión para recorrer el árbol binario de búsqueda y buscar los nodos que corresponden a las prendas que están en el arreglo.
// En cada nodo, la función itera a través del arreglo de prendas, y verifica si el nombre de la prenda coincide con el nombre del nodo. Si coincide, se marca la propiedad "vendido" del nodo como verdadera y se elimina la prenda del arreglo (utilizando la función splice).
// Una vez que se han procesado todos los nodos, la función devuelve "this", que es el objeto BinarySearchTree original que se utilizó para llamar al método. Esto permite que la función sea encadenada con otros métodos.
// En resumen, esta función busca prendas de vestir en un árbol binario de búsqueda y marca las prendas como vendidas si se encuentran en el arreglo de nombres de prendas. Además, elimina las prendas del arreglo a medida que se van encontrando en el árbol.


//OTRA MANERA G

BinarySearchTree.prototype.vender = function(prendas) {
  if (prendas.length === 0) {
    return false;
  }

  function venderRecursivo(nodo) {
    if (nodo === null) {
      return;
    }

    if (prendas.includes(nodo.nombre)) {
      nodo.vendido = true;
    }

    venderRecursivo(nodo.izquierda);
    venderRecursivo(nodo.derecha);
  }

  venderRecursivo(this.raiz);
  return true;
}



//EXPLICACION LOGICA
// Esta función es un método personalizado agregado a la clase BinarySearchTree, que se encarga de marcar como vendidas las prendas de vestir que se pasan como argumento en un arreglo.
// La función comienza con una verificación de que el arreglo de prendas no esté vacío. Si está vacío, la función devuelve falso, ya que no se han realizado ventas.
// Luego, la función define una función recursiva interna llamada "venderRecursivo", que se encargará de recorrer el árbol binario de búsqueda para buscar las prendas en la estructura y marcarlas como vendidas.
// La función recursiva toma un nodo como argumento y verifica si el nodo es nulo (lo que significa que no hay más nodos que procesar en esa rama del árbol). Si el nodo no es nulo, verifica si el nombre de la prenda en ese nodo está incluido en el arreglo de prendas que se pasaron como argumento. Si la prenda está en el arreglo, se establece la propiedad "vendido" del nodo en "true", lo que indica que se ha vendido esa prenda.
// Luego, la función recursiva se llama a sí misma para procesar los nodos de la rama izquierda del árbol y luego los de la rama derecha. Esta recursión permite que se procesen todos los nodos del árbol.
// Finalmente, la función principal llama a la función recursiva, comenzando en la raíz del árbol, y devuelve verdadero para indicar que se han realizado ventas en el árbol.
// En resumen, esta función busca prendas de vestir en un árbol binario de búsqueda y marca las prendas como vendidas si se encuentran.



//OTRA MANERA DE HACERLO 

BinarySearchTree.prototype.vender = function (prendas) {
  // Comprobar si el arreglo de prendas a vender está vacío
  if (prendas.length === 0) {
    return false;
  }

  // Recorrer el árbol y agregar la propiedad "vendido: true" a los nodos que coincidan con alguno de los elementos del array
  let actual = this.raiz;
  while (actual) {
    if (prendas.includes(actual.nombre)) {
      actual.vendido = true;
    }
    if (actual.nombre > prendas[0]) {
      actual = actual.izquierda;
    } else if (actual.nombre < prendas[0]) {
      actual = actual.derecha;
    } else {
      break;
    }
  }

  // Si el nodo raíz no coincide con ningún elemento del array, se llama a la función vender() para el subárbol izquierdo y derecho
  if (!actual) {
    this.izquierda.vender(prendas);
    this.derecha.vender(prendas);
  }

  return true;
};
























// Define el método vender() en el prototipo de BinarySearchTree
BinarySearchTree.prototype.vender = function(array) {
    // Recorre el array de prendas a vender
    for (let i = 0; i < array.length; i++) {
      let currentNode = this.root;
  
      // Busca el nodo correspondiente al elemento actual del array
      while (currentNode) {
        if (currentNode.valor === array[i]) {
          // Actualiza la propiedad 'vendido' del nodo
          currentNode.vendido = true;
          break;
        } else if (array[i] < currentNode.valor) {
          currentNode = currentNode.izquierda;
        } else {
          currentNode = currentNode.derecha;
        }
      }
    }
  };


//EXPLICACION

// Inicia un bucle for para recorrer los elementos del array de prendas a vender.
// Para cada elemento del array, se define una variable currentNode que inicia en la raíz del árbol (this.root).
// Se inicia un bucle while que se ejecutará mientras la variable currentNode no sea null.
// Dentro del bucle while, se evalúa si el valor del nodo actual (currentNode.valor) es igual al elemento actual del array. Si es así, se actualiza la propiedad vendido del nodo a true y se utiliza la sentencia break para salir del bucle while.
// Si el elemento actual del array es menor que el valor del nodo actual (array[i] < currentNode.valor), se actualiza la variable currentNode con el nodo de la izquierda (currentNode.izquierda).
// Si el elemento actual del array es mayor que el valor del nodo actual (array[i] > currentNode.valor), se actualiza la variable currentNode con el nodo de la derecha (currentNode.derecha).
// Cuando se termina de recorrer el array de prendas a vender, el método finaliza.
// En resumen, el método vender() recorre el árbol de búsqueda binaria para buscar los nodos que coinciden con los elementos del array de prendas a vender, y actualiza la propiedad vendido de estos nodos a true.


//OTRA MANERA EJ 10

BinarySearchTree.prototype.vender = function(arr) {
    if (arr.length === 0) {
      return false;
    }
  
    function dfs(node, arr) {
      if (!node) {
        return;
      }
  
      if (arr.includes(node.nombre)) {
        node.vendido = true;
      }
  
      dfs(node.izquierda, arr);
      dfs(node.derecha, arr);
    }
  
    dfs(this.raiz, arr);
    return this;
  }

//   Podemos probar este método con el siguiente código:


  const arbol = new BinarySearchTree();
  arbol.insertar({nombre: "Camiseta", num: 20});
  arbol.insertar({nombre: "Saco", num: 7});
  arbol.insertar({nombre: "Abrigo", num: 30});
  arbol.insertar({nombre: "Pantalon", num: 6});
  arbol.insertar({nombre: "Gorra", num: 42});
  
  console.log(arbol.vender(["Gorra", "Pantalon", "Saco"]));

//La salida esperada es:

//   BinarySearchTree {
//     raiz:
//      Nodo {
//        valor: { nombre: 'Camiseta', num: 20 },
//        izquierda:
//         Nodo {
//           valor: { nombre: 'Saco', num: 7, vendido: true },
//           izquierda: Nodo { valor: { nombre: 'Pantalon', num: 6, vendido: true }, izquierda: null, derecha: null },
//           derecha: null },
//        derecha:
//         Nodo {
//           valor: { nombre: 'Abrigo', num: 30 },
//           izquierda: null,
//           derecha: Nodo { valor: { nombre: 'Gorra', num: 42, vendido: true }, izquierda: null, derecha: null } } } }

//EXPLICACION
//paso a paso
// La función vender es agregada al prototype de BinarySearchTree.
// El método vender recibe un parámetro prendas, que es un array de strings que representan las prendas a vender.
// Se verifica si el array prendas está vacío. Si lo está, la función retorna false.
// Se comienza recorriendo el árbol desde la raíz (nodo principal).
// Si el nodo actual coincide con alguna prenda del array prendas, se agrega la propiedad vendido: true al nodo.
// Si el nodo actual no coincide con ninguna prenda del array prendas, se verifica si la prenda a buscar es menor o mayor que el nodo actual, y se procede a buscar en el subárbol correspondiente.
// El proceso se repite hasta que se han recorrido todos los nodos del árbol.
// Una vez que se ha recorrido todo el árbol, la función retorna true.





// Definir la función vender() en el prototipo de BinarySearchTree que recibe un array como parámetro.
// Verificar que el arreglo recibido no esté vacío. Si lo está, retornar false.
// Recorrer el árbol utilizando un algoritmo de búsqueda en profundidad preorden (DFS preorden).
// En cada nodo visitado, verificar si el nombre de la prenda coincide con algún elemento del arreglo recibido.
// Si la prenda coincide, agregar la propiedad "vendido: true" al objeto que representa el nodo.
// Continuar la búsqueda en profundidad preorden recursivamente por el subárbol izquierdo y luego por el subárbol derecho.
// Retornar true para indicar que la venta fue exitosa.
// Es importante destacar que este algoritmo modifica el árbol original, agregando la propiedad "vendido" a los nodos que correspondan. Si se desea mantener el árbol original intacto, se deberá crear una copia antes de llamar a esta función.

























// //DEFINICIONES IMPORTANTES


// Estructura de Datos: es la forma en que organizamos los datos cuando programamos. Básicamente, este tema trata de encontrar formas particulares de organizar datos de tal manera que puedan ser usados ​​de manera eficiente.

// Lista Enlazada: es un objeto de tipo lista, sirven para guardar una secuencia de nodos enlazados entre ellos y que contienen información. Podemos decir que cada nodo contiene datos y enlaces a otros nodos.

// Árbol: son estructuras de datos que contiene una serie de nodos conectados entre ellos y que se asemeja a un árbol. Raiz,right,left. Caso base head === null

// Closures: Funcion que retorna otra funcion. Un closure es cuando una función es capaz de recordar y acceder a un lexical scope, incluso cuando la función es ejecutada por fuera del lexical scope.

// Contexto de Ejecución: es el entorno léxico actual donde se está ejecutando el código. Scope global o local.

// Variable THIS: el valor de this está determinado por cómo se invoca a la función. No puede ser establecida mediante una asignación en tiempo de ejecución, y puede ser diferente cada vez que la función es invocada.

// Hoisting: es una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript. Las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.

// Pasar por valor y por referencia: Cuando pasamos algo por referencia, estamos pasando una referencia o un puntero al objeto. Por lo tanto, cualquier cambio que hagamos a esa referencia, se va a ver reflejado en el objeto original. En cambio, cuando pasamos algo por valor, estamos pasando el elemento por sí mismo, o una copia de él.

// Algoritmo: es cualquier cosa que funcione paso a paso, donde cada paso se pueda describir sin ambigüedad y tiene un límite fijo en cuanto a la cantidad de datos que se pueden leer y escribir.

// Big O notation: es la expresión matemática de cuánto tiempo tarda un algoritmo en ejecutarse dependiendo de cuánto tiempo es la entrada.

// Inmediatly Invoked Function Expression (IIFF): son funciones que se ejecutan tan pronto como se definen.


// - **SINGLE THREADED Y SINCRÓNICO**
    
//     Un **thread** (o hilo de ejecución) es la secuencia de instrucciones más pequeña que puede ser manejada por un *planificador de recursos* (se encarga de repartir el tiempo disponible de los recursos del sistema entre todos los procesos).
    
//     JavaScript es **Single Threaded** y **Sincrónico**, es decir que sólo puede hacer un sólo comando o instrucción en cada momento y que lo hace en orden, empieza la instrucción siguiente cuando termina la anterior.


//     - **SYNTAX PARSER**
    
//     Lee el código línea por línea y determina lo que hace cada parte. También chequea si la gramática es correcta o no. El ***Syntax Parser*** es el intérprete entre tu código y la computadora. Traduce tu código a un lenguaje que la máquina puede entender.

//     - **LEXICAL ENVIROMENT**
    
//     El ***Lexical Environment*** tiene que ver con *dónde* están declarados ciertos statements o expresiones en tu código. No será lo mismo hacerlo en un lugar que en otro.

//     - **GLOBAL ENVIROMENT**
    
//     El **Global Enviroment** es la ventana “padre” del código. El la parte más externa, la que envuelve a todo el código. Dentro de este contexto podremos encontrar otros contextos.

//     - **EXECUTION CONTEXT**
    
//     El contexto de ejecución contiene información sobre **QUÉ** código se está ejecutando en cada momento. Esto se da en las *functions*.

//     - **CREACIÓN Y EJECUCIÓN**
    
//     Cuando el intérprete inicia el corrido del código entra en *execution context* e inicia dos etapas. La primera (**creation phase**) y la segunda (**execution phase**). En la ***creation phase*** suceden varios procesos. Los dos más importantes son el *hoisting* y la creación del nuevo entorno. En la ***execution phase*** se ejecuta el código.

//     - **SCOPE**
    
//     El **Scope** de una variable hace referencia al lugar donde esta va a vivir , o podrá ser accesible. Podríamos decir también que **Scope** es el alcance que determina la accesibilidad de las variables en cada parte de nuestro código.
    
//     Cada contexto maneja sus propias variables, y son independientes de los demás. Justamente por eso, podemos usar los mismos nombres de variables dentro de funciones que creamos sin que *pisen* las demás.
    
//     También sabemos que podemos acceder a una variable declarada en el contexto global dentro de una función. Esto se debe a que JavaScript primero busca una variable dentro del contexto que se está ejecutando, si no la encuentra ahí, usa la referencia al `outer context` para buscarla dentro de ese contexto.


//     VALOR Y REFERENCIA

//     En este caso estamos pasando variables por valor. Al comienzo a y b son distintas. Luego a se hace “fotocopia” de b y adquiere su valor. Si luego cambiamos el valor de b, el valor de a se seguirá manteniendo igual, ya que mantiene independencia. Las variables que se pasan por valor son los datos primitivos.


//     Cuando pasamos objetos, arreglos o funciones en variables lo haremos por referencia. En ese caso hay un “reflejo” de los cambios que hagamos en cualquiera de las variables. En el ejemplo primero creamos un objeto, y luego definimos un nuevo objeto que es igual al primero. Cuando al primero le agregamos la propiedad Edad, esta se agregará automáticamente a la segunda.


//     - **THIS**
    
//     Cuando se crea el `execution context`, el interprete reserva el espacio de memoria para las variables (hoisting), guarda la referencia al `outer enviroment` y además “setea” la variable `this`. Esta variable va a apuntar a distintos objetos dependiendo en cómo fue invocada la función.



//     - **EVENT LOOP**
    
//     **setTimeout()** es una función integrada en Javascript que nos permitirá retrasar el proceso de una función. Existe un espacio llamado “***Web Apis***” en el que es enviado el proceso de esta función. De esta forma JavaScript puede seguir procesando el código sin perder el tiempo en esa función.
    
//     Hay que destacar que, una vez enviado el **setTimeout** al **Web Apis**, JavaScript procesará el resto del código, y sólo recibirá el proceso terminado del Web Apis una vez terminada la lectura del código.
    
//     Una vez que el **setTimeout** se terminó de procesar en el Web Apis, pasará al **Callback Queue**. Aquí serán enviados todos los procesos que JavaScript deriva, y como dijimos, una vez que el intérprete termina de leer el código, recién ahí serán reintegrados al **Call Stack**.



//     - **ESTRUCTURA DE DATOS**
//     - **¿Qué es una estructura de datos?**
        
//         Las estructuras de datos son el estudio de las distintas formas en las que se puede organizar la información. El objetivo es que la búsqueda e inserción de datos sea lo más eficiente posible.
        
//         Dentro del mundo de la programación existen muchísimas estructuras de datos. Una que ya conocemos, por ejemplo, son los arreglos. Estos pueden guardar valores de forma lineal (uno después de otro).
        
//         > Pensemos en que los datos que tenemos que manejar son libros. En un principio tenemos muchísimos libros desordenados por toda la casa. Cada vez que queremos leer un libro tardamos cerca de dos horas buscando uno por uno hasta encontrarlo. ¡Esto es ineficiente! Para solucionar este problema podríamos crear una biblioteca. Allí acomodaremos todos los libros por orden alfabético, y encontrarlos será mucho más sencillo. La biblioteca es nuestra estructura de datos.
//         >


//         - **ARRAY**
    
//         Los **arreglos** 
//         son una estructura de datos nativa que tienen todos los lenguajes de programación (¡y que ya conoces!). Estos son una colección finita de elementos del mismo tipo que ocupan espacios contiguos de la memoria. Se puede acceder a cada uno a través de su índice.
//         Una de sus ventajas es que la inserción de elementos al principio o al final es muy sencilla de hacer(push y shift). Pero buscar o eliminar elementos dentro de él tiene un poco más de dificultad.

//         ¡Claro! Para crear un array con objetos dentro en JavaScript, puedes seguir esta sintaxis:


let miArray = [
  {nombre: "Juan", edad: 25},
  {nombre: "María", edad: 30},
  {nombre: "Pedro", edad: 20}
];

// En este caso, el array contiene tres objetos, cada uno con una propiedad "nombre" y una propiedad "edad". Puedes acceder a las propiedades de cada objeto utilizando la sintaxis de punto o de corchetes, como en este ejemplo:


console.log(miArray[0].nombre); // "Juan"
console.log(miArray[1]["edad"]); // 30

// En el primer ejemplo, estamos accediendo a la propiedad "nombre" del primer objeto en el array, utilizando la sintaxis de punto. En el segundo ejemplo, estamos accediendo a la propiedad "edad" del segundo objeto en el array, utilizando la sintaxis de corchetes.


// Para buscar un objeto en una posición específica de un array, puedes utilizar la sintaxis de corchetes para acceder a ese índice del array. En este caso, si quieres buscar el objeto en la posición 1 del array, puedes hacer lo siguiente:


let miArray = [
  {nombre: "Juan", edad: 25},
  {nombre: "María", edad: 30},
  {nombre: "Pedro", edad: 20}
];

let objetoBuscado = miArray[1];

console.log(objetoBuscado); // {nombre: "María", edad: 30}

// Para eliminar un objeto de una posición específica de un array, puedes utilizar el método splice(). Este método toma dos parámetros: el primer parámetro indica el índice del array donde comenzará la eliminación, y el segundo parámetro indica el número de elementos que se eliminarán. En este caso, si quieres eliminar el objeto en la posición 1 del array, puedes hacer lo siguiente:


let miArray = [
  {nombre: "Juan", edad: 25},
  {nombre: "María", edad: 30},
  {nombre: "Pedro", edad: 20}
];

miArray.splice(1, 1);

console.log(miArray); // [{nombre: "Juan", edad: 25}, {nombre: "Pedro", edad: 20}]

// En este ejemplo, estamos eliminando un solo elemento a partir del índice 1 del array, lo que resultará en la eliminación del objeto en la posición 1. El array resultante contiene solo los objetos en las posiciones 0 y 2.


// ¿Qué es una variable en programación y cómo se declara en JavaScript?

// Una variable en programación es un contenedor que se utiliza para almacenar datos en la memoria de un programa. En JavaScript, las variables se declaran utilizando la palabra clave var, let o const, seguida del nombre de la variable y, opcionalmente, un valor inicial



// ¿Cuál es la diferencia entre una función y un método en JavaScript?

// na función es un bloque de código que se puede llamar para realizar una tarea específica. Las funciones pueden tomar argumentos y devolver un valor. 
//Por otro lado, un método es una función que está asociada a un objeto y se puede llamar a través de ese objeto. La principal diferencia entre una función y un método es que un método está vinculado a un objeto específico, mientras que una función no está vinculada a ningún objeto en particular.

// Escribe una función en JavaScript que reciba un número como parámetro y devuelva el número al cuadrado.

function cuadrado(numero) {
    return numero * numero;
  }
  
  // Ejemplo de uso de la función
  console.log(cuadrado(5)); // Devuelve 25

// ¿Qué es una estructura de control de flujo en programación y cuáles son las estructuras de control de flujo más comunes en JavaScript?

// Una estructura de control de flujo es un conjunto de instrucciones que se utilizan para controlar el flujo de ejecución de un programa. En JavaScript, las estructuras de control de flujo más comunes son:
// if / else: se utiliza para tomar decisiones basadas en una condición.

// for: se utiliza para ejecutar un bloque de código varias veces, generalmente con una variable de contador.

// while: se utiliza para ejecutar un bloque de código mientras se cumpla una condición.

// switch: se utiliza para tomar decisiones basadas en múltiples condiciones.

// try / catch: se utiliza para manejar errores y excepciones.

// ¿Qué es un array en programación y cómo se puede acceder a un elemento específico en JavaScript? 