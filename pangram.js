function includes(haystack,needle){
  for ( let char of haystack){
    if (char === needle){
      return true
    }
  }
  return false
}
function ofIndex(haystack,needle){
  let i = 0
  for (let char of haystack){
    if(char === needle){
      return i
    }
    i = i + 1
  }
  return - 1
}
function toLowerCase(someString){
  let U  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let l =  "abcdefghijklmnopqrstuvwxyz"
  let result  = ""
  for(let char of someString){
    let  idx  = ofIndex(U,char)
    if(ofIndex(U,char)!== -1 ){
      result  = result + l[idx]
    }
    else{
      result =  result + char
    }
  }
  return result     
}
function isPangram(sentence) {
  sentence = toLowerCase(sentence)
  let al = "abcdefghijklmnopqrstuvwxyz"
  for ( let letter of al){
    if(includes(sentence,letter)=== false){
      return false
    }
  }
  return true
}
