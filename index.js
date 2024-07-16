const number = prompt('Enter a number');

if (number === null) {
    alert('You canceled!');
} else if (isNaN(+number) || !number.trim()) {
    alert('Please, enter a valid number!');
} else {

    const numSpl = number.split('');
console.log(numSpl);

const result = numSpl.join(' ');
console.log(result);
}