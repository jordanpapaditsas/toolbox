let array = [5, 7, 3, 5, 8];

let minPos = findLowestPosition(array);
let minVal = array[minPos];

console.log(`minPosition: ${minPos + 1}, minValue: ${minVal}`);

function findLowestPosition() {
  let minPos = 0;
  let minVal = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[minVal]) {
      minPos = i;
      minVal = array[i];
    }
  }
  return minPos;
}

