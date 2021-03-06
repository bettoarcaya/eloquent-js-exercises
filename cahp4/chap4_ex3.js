const posicion = (list, pos, counter = 0) => {
  if(pos == counter){
    return list.valor;
  }
  
  counter++;
  return posicion(list.resto, pos, counter);
}

const buildArray = (arr, list) => {
  if(list == null){
    return arr;
  }
  
  arr.push(list.valor)
  return buildArray(arr, list.resto);
}

const preceder = (element, list) => {
  return {
    valor: element,
    resto: list
  };
}

const arrayALista = arr => {
  let lists = preceder(arr[arr.length - 1], null);
  
  for(let index = arr.length - 2; index >= 0; index--){
    lists = preceder(arr[index], lists);
  }
  
  return lists;
}

const listaAArray = list => {
  return buildArray([], list);
}

console.log(arrayALista([10, 20]));
// → {valor: 10, resto: {valor: 20, resto: null}}
console.log(listaAArray(arrayALista([10, 20, 30])));
// → [10, 20, 30]
console.log(preceder(10, preceder(20, null)));
// → {valor: 10, resto: {valor: 20, resto: null}}
console.log(posicion(arrayALista([10, 20, 30]), 1));
// → 20