let table = "";

for(let y = 1; y <= 8; y++){
  for(let x = 1; x <= 8; x++){
    (y % 2 != 0) 
      ? table += (x % 2 == 0) ? "#" : " "
      : table += (x % 2 == 0) ? " " : "#";
  }

  table += `\n`;
}

console.log(table)