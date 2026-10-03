function collatzSteps(number) {
  let counter = 0
  repeat(200){
    if(number !==1){
      if(number % 2===0){
        number =number / 2
      }
      else {
        number = number * 3 + 1
      }
      counter = counter + 1
    }
  }
  return counter
}
