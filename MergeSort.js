const mergeSort = (arr, min) => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(min, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (first, second) => {
  let result = [],
    firstIndex = 0,
    secondIndex = 0;

  while (firstIndex < first.length && secondIndex < second.length) {
    if (first[firstIndex] < second[secondIndex]) {
      result = [...result, first[firstIndex]];
      firstIndex++;
    } else {
      result = [...result, second[secondIndex]];
      secondIndex++;
    }
  }

  return [...result, ...first.slice(firstIndex), ...second.slice(secondIndex)];
};

const array = [0, 8, 5, 2];
console.log(mergeSort(array, 0));
