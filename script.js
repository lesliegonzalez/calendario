
const diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
function calcularFecha() {
    //Obtener los valores de los inputs
    const dayInput = document.getElementById("day").value;
    const monthInput = document.getElementById("month").value;
    const yearInput = document.getElementById("year").value;

    console.log(dayInput, monthInput, yearInput);

    //Generar una fecha
    const date = new Date(yearInput, monthInput - 1, dayInput);
    let day = date.getDay();
    
    const dayLabel = diaSemana[day]; //Arroja el número día comenzando por domingo como índice 0
    let message = "";

    switch (day) {
        case 0: case 6: // Domingo : Sábado
            message = "no es día laboral";
            break;
        default:
            message = "es día laboral";
            break;
    }
    //Mostrar resultado en HTML
    const resultElement = document.getElementById("result");
    resultElement.value = `${dayLabel}, ${message}`;
}


console.log(`Para realizar el presente proyecto me ayudé de un tutorial que hizo Alan Escobedo y otro que encontré en internet; a pesar que haber seguido ambos tutoriales, debo decir que me puse a experimentar con todo lo que pude ya que aún me cuesta trabajo resolver varias cosas (principalmente en JS), sin embargo, prometo que no me rendiré. Gracias por todo, Serch 🤓`)