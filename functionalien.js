let direction = true
let step = 0
function shootIfAlienAbove(){
  if (isAlienAbove()){
    shoot()
  }
}
repeat() {
  shootIfAlienAbove()
  if (direction){
    moveRight()
  }
  else{
    moveLeft()
  }
  step = step +1
  if(step === 10){
    step = 0
    direction = !direction
  }
}

