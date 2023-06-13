let array = [10, 17, 15, 9, 7, 11, 4];

  selectionSort(array);
  console.log(array);

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    getLowestValueElementPosition(array, i, array.length - 1);
  }
}

function getLowestValueElementPosition(array, low, high) {
  let minPosition = low;

  for (let i = low; i <= high; i++) {
    if (array[i] < array[minPosition]) {
      minPosition = i;
    }
  }
  swap(array, low, minPosition);
  return minPosition;
}

function swap(array, i, j) {
  let tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}