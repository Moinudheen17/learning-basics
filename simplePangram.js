function includes(haystack,needle){
  for ( let char of haystack){
    if (char === needle){
      return true
    }
  }
  return false
}   
function isPangram(sentence) {
  for ( let letter of "abcdefghijklmnopqrstuvwxyz"){
    if(includes(sentence,letter)=== false){
      return false
    }
  }
  return true
}
