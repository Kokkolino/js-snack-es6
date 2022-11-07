// snack1
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
function snack1(){
    // input
    let min = parseInt(prompt(`inserisci la posizione da cui vuoi iniziare compreso tra "1 e ${myArray.length + 1}".`)) - 1;
    let max = parseInt(prompt(`inserisci la posizione da cui vuoi finire compreso tra "${min + 1} e ${myArray.length + 1}".`)) - 1;
    // rulers
    if (min < 0){
        min = min * -1;
    }
    if (max < 0){
        max = max * -1;
    }
    if (max > myArray.length) {
        max = myArray.length;
    }
    if (min > myArray.length) {
        min = myArray.length;
    }
    if (min > max){
        let x = min;
        min = max;
        max = x;
    }
    if (max === 0 && min === 0){
        max= 1;
    }
    if (min === max){
        min += -1;
    }
    let myArray2 = myArray.slice(min, max);
    alert(`i nomi selezionati sono : ${myArray2.join(", ")}`)
}
document.getElementById('snack1').addEventListener('click',snack1);

// snack2
// studenti
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];
// funzione
function snack2(){
    // uppercase
  let studentsName = [];
  for(let key in students){
    studentsName.push(students[key].name.toUpperCase());
  }
  alert(`la lista nomi é: ${studentsName.join(', ')}`);

  
}
document.getElementById('snack2').addEventListener('click',snack2);