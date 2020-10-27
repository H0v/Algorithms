const binarySearch = (array, min, max, key) => {
  array = array.sort((a, b) => a - b);
  if (max < min) {
    return -1;
  } else {
    const mid = Math.ceil(min + (max - min) / 2);
    if (array[mid] < key) {
      return binarySearch(array, mid + 1, max, key);
    } else if (array[mid] > key) {
      return binarySearch(array, min, mid - 1, key);
    } else {
      return mid;
    }
  }
};

const arr = [100, 5, 8, -7, 0];
const max = arr.length - 1;
console.log(binarySearch(arr, 0, max, 8));
