const number = prompt('Enter a number');

const numStr = number.toString();
console.log(numStr);

const numSpl = numStr.split('');
console.log(numSpl);

const result = numSpl.join(' ');
console.log(result);