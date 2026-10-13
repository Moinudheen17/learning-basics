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
