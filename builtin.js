function includes(haystack,needle){
  for ( let char of haystack){
    if (char === needle){
      return true
    }
  }
  return false
}
function isPangram(sentence) {
  sentence = sentence.toLowerCase()
  let al = "abcdefghijklmnopqrstuvwxyz"
  for ( let letter of al){
    if(sentence.includes(letter)=== false){
      return false
    }
  }
  return true
}


