const revertirArray = arr => {
  let newArr = [];
  
  for(let index = arr.length - 1; index >= 0; index--){
    newArr.push(arr[index])
  }
  
  return newArr;
}

const revertirArrayEnSuLugar = arr => {
  let init = 0;
  let end = arr.length - 1;
  let count = 0;
  
  while (count !== Math.floor(arr.length / 2)){
    let aux = arr[init];
    arr[init] = arr[end];
    arr[end] = aux;
    count++;
    init++;
    end--;
  }
  
  return arr;
}

console.log(revertirArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let valorArray = [1, 2, 3, 4, 5];
revertirArrayEnSuLugar(valorArray);
console.log(valorArray);
// → [5, 4, 3, 2, 1]