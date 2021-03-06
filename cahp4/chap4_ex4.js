const compare = (a, b) => {
  for(let key of a){
    if(!b.includes(key)){
      return false
    }
  }
  
  for(let key of b){
    if(!a.includes(key)){
      return false
    }
  }
  
  return true;
}

const igualdadProfunda = (objA, objB) => {
  if(typeof(objA) === typeof(objB)){
    const a = Object.keys(objA);
    const b = Object.keys(objB);
    return compare(a, b);
  }
  
  return false
}

let objeto = {aqui: {hay: "un"}, objeto: 2};
console.log(igualdadProfunda(objeto, objeto));
// → true
console.log(igualdadProfunda(objeto, {aqui: 1, object: 2}));
// → false
console.log(igualdadProfunda(objeto, {aqui: {hay: "un"}, objeto: 2}));
// → true