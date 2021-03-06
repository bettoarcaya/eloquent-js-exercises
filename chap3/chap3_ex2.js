const esPar = num => {
  if(num < 0) { num *= -1; }
  if(num === 0) { return true; }
  if(num === 1) { return false; }
  
  return esPar(num - 2);
}

console.log(esPar(50));
// → true
console.log(esPar(75));
// → false
console.log(esPar(-1));
// → false