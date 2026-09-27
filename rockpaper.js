// Determine the winner
let yc = getYukiChoice()
let ac = getAndoChoice()
if (yc  ===  ac ){
  announceResult("tie")
}
else if (yc === "paper" && ac === "rock"){
  announceResult("Yuki")
}
else if (yc === "paper" && ac === "scissors"){
  announceResult("Ando")
}
else if (yc === "rock" && ac === "paper"){
  announceResult("Ando")
}
else if (yc === "rock" && ac === "scissors"){
  announceResult("Yuki")
}
else if (yc === "scissors" && ac === "paper"){
  announceResult("Yuki")
}
else{
  announceResult("Ando")
}
