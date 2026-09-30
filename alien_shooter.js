let direction = true
let step = 0
repeat() {
  if (isAlienAbove()){
    shoot()
  }
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
