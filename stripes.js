// TODO: Draw the 20 stripes
let left = 0
let top = 0
let width = 5
let height = 100
let color = ""
let i = 0
repeat(20){
  i = i + 1
  left = (i-1) * 5
  if( i === 1 || i === 20){
    color = "purple"
  }
  else if ( i % 4 === 1){
    color = "yellow"
  }
  else if ( i % 4 === 2){
    color = "blue"
  }
  else if ( i % 4 === 3){
    color = "yellow"
  }
  else {
    color = "green"
  }
  rectangle(left, top, width, height, color )
}
