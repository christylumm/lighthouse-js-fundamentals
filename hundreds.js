//define a function HowManyHundreds. When this function is given a number, it should return how many hundreds fit into that number.

function howManyHundreds(num) {
  return (num - (num % 100)) / 100; 
}

console.log(howManyHundreds(840), "=?", 8);