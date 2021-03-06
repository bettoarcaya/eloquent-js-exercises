for (let index = 1; index <= 100; index++){
  if (index % 3 == 0){
    console.log(`${index}: ${index % 3} Fizz`)
  }
  if (index % 5 == 0 && index % 3 != 0){
    console.log(`${index}: ${index % 5} Buzz`)
  }
  if(index % 5 == 0 && index % 3 == 0){
    console.log(`${index}: ${index % 5} ${index % 3} FizzBuzz`)
  }
}