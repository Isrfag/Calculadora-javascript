

//ESTA ACCION AGREGA LOS NUMEROS EN PANTALLA
const agregar = (valor) => {
    
    document.getElementById('pantalla').value+=valor; //+=para que no se sobreesciban
}

//ESTA ACCIÓN BORRA LO QUE HAY EN PANTALLA
const borrar = () => {

    document.getElementById('pantalla').value='';
}

//ESTA ACCION TOMA EL VALOR DE LA PANTALLA Y EJECUTA LOS CÁLCULOS
const calcular = () => {
    const valorPantalla = document.getElementById('pantalla').value //obetenmos el string de la pantalla
    const resultado = eval(valorPantalla) //eval cambia un string a un codigo numerico y lo ejecuta
    document.getElementById('pantalla').value = resultado //Pintamos el resultado
}