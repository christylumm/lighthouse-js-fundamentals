function lastIndexOf (array, value) {
  let isPresent = false;
  let index;

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      index = i;
      isPresent = true;
      break
    }
  }

  if (index >= 0) {
    return index;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));