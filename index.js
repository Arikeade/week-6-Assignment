function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
    return number % 2 !==0;
}

console.log(isEven(5)); 
console.log(isEven(4));
console.log(isOdd(5)); 
console.log(isOdd(4)); 



function printNumber(n1, n2) {
    for (let i = n1; i <= n2; i++) {
      console.log(i);
    }
  }


function calcFunc() {
    let sum = 0;
    for (let i = 1; i <= 3; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(calcFunc());

  
  