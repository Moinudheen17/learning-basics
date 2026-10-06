function didTheyPass(marks) {
  let minor  = 0
  let major  = 0
  for (let char of marks){
    if ( char === "💥"){
      major = major + 1
    }
    else if (char === "❌"){
      minor =  minor + 1
    }
  }
  if (major>= 1|| minor >= 5 ){
    return false
  }
  else {
    return true
  }
}
