function signPrice(signText) {
  let i = 0
  for ( let char of signText){
    if(char !==" "){
      i = i+1
    }
  }
  return `That will cost $${12 *i}`
}
