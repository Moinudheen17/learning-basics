



repeat(200) {
  let r = Math.randomInt(1,29)
  let x = Math.randomInt(r,100-r)
  let y = Math.randomInt(r,100-r)
  let sat = Math.randomInt(20,80)
  let lig = Math.randomInt(20,80)
  let hue = 0
  let color = hsl(hue,sat,lig)
  hue = hue + Math.randomInt(0,360)
  circle(x,y,r,color)
}
