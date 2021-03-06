const rango = (start, finish, pass = 0) => {
  let output = [];
  
  if(pass < 0){
    for(let index = start; index >= finish; index--){
      output.push(index);
    }
  }
  if(pass > 0){
    for(let index = start; index <= finish; index += pass){
    	output.push(index);
    }
  }
  if(pass === 0){
    for(let index = start; index <= finish; index++){
    	output.push(index);
    }
  }
  
  return output;
}

const sum = numbers => {
  let output = 0;
  
  for(let index of numbers){
  	output += index;
  }
  
  return output;
}

console.log(rango(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rango(5, 2, -1));
// → [5, 4, 3, 2]
console.log(rango(1, 10, 2));
// → [1, 3, 5, 7, 9]
console.log(sum(rango(1, 10)));
// → 55