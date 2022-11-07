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
    alert(`i nomi selezionati sono : ${myArray2}`)

}

document.getElementById('snack1').addEventListener('click',snack1);
