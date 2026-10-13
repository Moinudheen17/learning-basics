function whatAmI(string) {
  if(isAlpha(string)===true){
    return "Alpha"
  }
  if(isNumeric(string)===true){
    return "Numeric"
  }
  else if(isAlphanumeric(string)===true){
    return "Alphanumeric"
  }
  else{
    return "Unknown"
  }
}
function isAlphanumeric(string){
  let an = string.toLowerCase()
  let re = ""
  let no = "1234567890"
  let alp = "abcdefghijklmnopqrstuvwxyz"
  for (let char of an){
    if( no.includes(char)=== true || alp.includes(char)===true){
      re = re + char
    }
    continue
  }
  if( re === an){
    return true
  }
  else{
    return false
  }
}
function isAlpha(string){
  let w = string.toLowerCase()
  let result = ""
  let alp = "abcdefghijklmnopqrstuvwxyz"
  for (let char of w) {
    if(alp.includes(char)=== true){
      result = result + char
    }
    continue
  }
  if (result === w){
    return true
  }
    else {
    return false
  }
}
