function hammingDistance(str1, str2) {
  let i = 0
  let distance = 0
  for ( let char of str1){
    if(char !== str2[i]){
      distance =  distance + 1
    }
    i = i + 1
  }
  return distance
}
