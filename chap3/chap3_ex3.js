const contarFs = (str, char = "F") => {
  let counter = 0;
  for(let index = 0; index < str.length; index++){
    if(str[index] === char){
      counter++;
    }
  }
  
  return counter;
}

const contarCaracteres = (str, char) => {
  return contarFs(str, char);
}

console.log(contarFs("FFC"));
// → 2
console.log(contarCaracteres("kakkerlak", "k"));
// → 4