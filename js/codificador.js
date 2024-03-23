function codificadorador(){
    //aquí traje el texto de la caja de texto
    var constanteNombre = document.getElementById(`codificador`).value;
    //metemos un if por si el textarea viene vacío
    if(constanteNombre!="" && constanteNombre!=" "){
        /*
        el menú lo centro en torno al número de valores que tengo, como tengo sólo 5 valores probales hago que el ciclo for me ayude a ir checando cada uno de los casos
        */
        for (let i = 0; i < 5; i++) {
            //aquí llamo a la funcion de menú para que me de la cadena de carácteres
            constanteNombre=menu(i,constanteNombre,"codifica");
        }

        //llamamos a la funcion que muestra en pantalla el texto codificado
        mostradorEnPantalla(constanteNombre);
    }else{
        alert("La casilla está en blanco, ingresa un valor");
    }
}

function decodificadorador() {
    //aquí traje el texto de la caja de texto
    var constanteNombre = document.getElementById(`decodificador`).value;
    //metemos un if por si el textarea viene vacío
    if(constanteNombre!="" && constanteNombre!=" "){
        /*
        el menú lo centro en torno al número de valores que tengo, como tengo sólo 5 valores probales hago que el ciclo for me ayude a ir checando cada uno de los casos
        */
        for (let i = 0; i < 5; i++) {
            //aquí llamo a la funcion de menú para que me de la cadena de carácteres
            constanteNombre=menu(i,constanteNombre,"decodifica");
        }

        //llamamos a la funcion que muestra en pantalla el texto codificado
        mostradorEnPantalla(constanteNombre);
    }else{
        alert("La casilla está en blanco, ingresa un valor");
    }
}

//declaro 3 variables en esta función, la variableSeleccionadora que pasara por el switch y así saber cuál de los casos ejecutar, la cadenaHTML que es el string de texto del textarea y el codiIndicador que me indica si estoy usando el codificador o decodificador
function menu(variableSeleccionadora,cadenaHTML,codiIndicador) {

    switch (variableSeleccionadora) {
        case 0:
            //la función .replace cambia las cosas en strings, y con la instruccion /variable/g checo en todo el string si hay una letra así, y en caso de que la haya lo cambia por el valor que nosotros pongamos después de la coma

            //en caso de que quisiese afectar sólo a la primera palabra de algun string puedo sólo escribir la variable sin el /variable/g
            
            // Agregue los if's para no tener que repetir el switch, así sólo tengo que ejecutar la funcion que cambia las letras en los strings, y envío el string del input en cadenaHTML,, especifico qué quiero que busque para reemplazar y el que quiero que reemplace a esa parte del string
            
            if (codiIndicador=="codifica"){
                cadenaHTML= reemplazador(cadenaHTML,/e/g,"enter");
            }else if (codiIndicador == "decodifica") {
                cadenaHTML= reemplazador(cadenaHTML,/enter/g,"e");
            }
            break;
        case 1:
            if (codiIndicador=="codifica"){
                cadenaHTML=reemplazador(cadenaHTML,/i/g,"imes");
            }else if (codiIndicador == "decodifica") {
                cadenaHTML= reemplazador(cadenaHTML,/imes/g,"i");
            }
            break;
        case 2:
            if (codiIndicador=="codifica"){
                cadenaHTML=reemplazador(cadenaHTML,/a/g,"ai");
            }else if (codiIndicador == "decodifica") {
                cadenaHTML= reemplazador(cadenaHTML,/ai/g,"a");
            }
            break;
        case 3:
            if (codiIndicador=="codifica"){
                cadenaHTML=reemplazador(cadenaHTML,/o/g,"ober");        
            }else if (codiIndicador == "decodifica") {
                cadenaHTML= reemplazador(cadenaHTML,/ober/g,"o");
            }
            break;
        case 4:
            if (codiIndicador=="codifica"){
                cadenaHTML=reemplazador(cadenaHTML,/u/g,"ufat");
            }else if (codiIndicador == "decodifica") {
                cadenaHTML= reemplazador(cadenaHTML,/ufat/g,"u");
            }
            break;
    }

    return cadenaHTML;
}

//cadenaCaracteres es el string del textarea, y con esta función reemplazamos lo que queremos
function reemplazador(cadenaCaracteres,variableRemplazar,valorCambiar) {
    let reemplazado = cadenaCaracteres.replace(variableRemplazar,valorCambiar);
    return reemplazado;
}

function mostradorEnPantalla(nombreMostrador) {   
    let codificado=document.querySelector(`#mostradorCodi`);
    //aquí es donde hacemos que escriba en el textarea una variable
    codificado.value = nombreMostrador;
}

function copy() {
    let copy = document.getElementById('mostradorCodi').value;
    //navegator.clipboard.writeText(variable que queremos copiar) lo usamos para copiar algo en el portapapeles
    navigator.clipboard.writeText(copy);
    alert(`el texto se ha copiado`);
}
