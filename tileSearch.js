function contains(haystack, needle) {
  for( let char of haystack){
    if(char === needle){
      return true
    }
  }
  return false
}
