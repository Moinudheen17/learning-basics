function getLength(string){
  let  i = 0
  for (let char of string){
    i = i + 1
  }
  return i
}    
function handleGuest(name, allowedPrefix) {
  let i = 0
  if (getLength(name)<getLength(allowedPrefix)){
    return false
  }
  for ( let char of name){
    if ( i<getLength(allowedPrefix)){
      if(name[i]!== allowedPrefix[i]){
        return false
      }
      i = i +1
    }
  }
  return true
}
