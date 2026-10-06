function reverse(str) {
  let result = ""
  for ( let char of str){
    result = char + result
  }
  return result
}
