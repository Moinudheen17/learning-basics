function countNucleotide(strand, nucleotide) {
  if(strand=== ""){
    return 0
  }
  if (strand.includes("X")=== true){
    return - 1
  }
  if(strand.includes(nucleotide)!== true){
    return  -1 
  }
  if (strand.includes(nucleotide) === true){
    let i  = 0
    for ( let char of strand ){
      if ( char === nucleotide){
        i = i + 1
      }
    }
    return i
  }
}
