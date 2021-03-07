let arrays = [[1, 2, 3], [4, 5], [6]];

const flat = (arr) => {
  return arr.reduce((a, b) => {
    return a.concat(b);
  });
}

console.log(flat(arrays));
// → [1, 2, 3, 4, 5, 6]