// problem 1
const threeParameters = (a, b, c) => a*b*c; 
// console.log(threeParameters(2, 3, 4));

const threeAddition = `I am a web developer. 
I love to code. 
I love to eat biryani.`
// console.log(threeAddition);

const aRro = (p1,p2=0) => p1+p2;
const bRro = aRro(2);
// console.log(bRro);

// problem 2

const filterEvenLengthNames = (friends) => {
    const evenLengthNames = friends.filter((name) => name.length % 2 === 0);
    return evenLengthNames;
  };
  const friendNames = ["Alice", "Bobs", "Charlie", "David", "Emily"];

  const evenLengthNames = filterEvenLengthNames(friendNames);
  
//   console.log(evenLengthNames);


//   problem 3
const averageOfSquaredElements = (numbers) => {
    const squaredNumbers = numbers.map((number) => Math.pow(number, 2));
    const sumOfSquaredNumbers = squaredNumbers.reduce((acc, val) => acc + val, 0);
    const average = sumOfSquaredNumbers / squaredNumbers.length;
    return average;
  };
  const numbers = [2, 4, 6, 8];

  const result = averageOfSquaredElements(numbers);
  
//   console.log(result); 

//   problem 4
const findMaxNumber = (array1, array2) => {
    const combinedArray = [...array1, ...array2];
    const maxNumber = Math.max(...combinedArray);
    return maxNumber;
  };
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];

const results = findMaxNumber(array1, array2);

// console.log(results);

// problem 2
const friends = friend => {
  let total = [];
  for (const friends of friend) {
      if(friends.length%2 == 0 ){
          total.push(friends);
      }
  }
  return total;
};
const friendNames = ["Alice", "Bobs", "Charlie", "David", "Emily"];
// console.log(...friendNames)
const result = friends(friendNames);
// console.log(...result);

// problem 3
const arrow = (number) => {
  let sum = 0;
  
  for(const numbers of number){
      const square = Math.pow(numbers, 2);
      // console.log(square);
      sum += square;
  }
  const allTotal = sum/number.length;
  return allTotal;
}
const arr = [1, 2, 3, 4, 5, 6, 7]
const total = arrow(arr);
// console.log(total);

// problem 4
const twoInputs = (num1,num2) => {
  const combine = num1;
  combine.push(...num2);
  return combine;
}
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10, 11, 12];
const totals = twoInputs(arr1, arr2);
// console.log(totals);

    
    
