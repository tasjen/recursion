function mergeSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
  const newArr = [];
  let i = start;
  let j = mid + 1;

  for (let k = start; k <= end; k++) {
    //if i or j is out of range, push and increment only the other
    if (i > mid) {newArr[k] = arr[j++]; continue;}
    if (j > end) {newArr[k] = arr[i++]; continue;}
    //compare(arr[i] to arr[j]) > push(to newArr) > increment(i or j)
    newArr[k] = arr[i] < arr[j] ? arr[i++] : arr[j++];
  }

  //copy merged array(or section) to the original array
  for (let k = start; k <= end; k++) {
    arr[k] = newArr[k];
  }
}
