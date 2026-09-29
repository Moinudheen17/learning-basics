// TODO: Build the wall
let left  = 0
let top = 90
let count = 0
let width = 20
let height = 10
let total = 100
let row = false
repeat(10){
  if (row === false ){
    left = 0
    count = 5
  }
  else{
    left = -10
    count = 6
    
  }
  repeat(count){
    rectangle(left, top, width, height, "brick")
    left =  left + 20
  }
  top = top - 10
  row = !row
}
