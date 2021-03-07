const loop = (val, condition, update, body) => {
  if(condition(val)){
    body(val);
    val = update(val);
    loop(val, condition, update, body);
  }
  
  return false;
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1