let array = [12, 7, 15, 10, 5, 19, 22];

let minPos = findLowestPosition(array);
let minVal = array[minPos];

// User-friendly adjustment with counting from 1 instead of 0 
console.log(`minPosition: ${minPos + 1}, minValue: ${minVal}`);  

function findLowestPosition(array) {
  let minPos = 0;
  let minVal = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < minVal) {
      minPos = i;
      minVal = array[i];
    }
  }
  return minPos;
}
