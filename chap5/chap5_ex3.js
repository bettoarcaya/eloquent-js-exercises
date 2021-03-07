function cada(array, test) {
  //using a cicle v1
  for(element of array){
    if(!test(element)){
      return false
    }
  }
  
  return true;
}

const cadaUsingSome = (array, test) => {
  //using some v2
  return !array.some(element => !test(element));
}

console.log(cada([1, 3, 5], n => n < 10));
console.log(cadaUsingSome([1, 3, 5], n => n < 10));
// → true
console.log(cada([2, 4, 16], n => n < 10));
console.log(cadaUsingSome([2, 4, 16], n => n < 10));
// → false
console.log(cada([], n => n < 10));
console.log(cadaUsingSome([], n => n < 10));
// → true