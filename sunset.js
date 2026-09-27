


// The sky

// The Sun
let xcenter = 50
let ycenter = 10
let radius = 5
let hue = 210
let sat = 70
let lig = 60
let r = 255
let g = 237
let b = 0
repeat(100){
  let skyColor = hsl(hue,sat,lig)
  let sunColor = rgb(r, g, b)
  //sky
  rectangle(0, 0, 100, 100, skyColor)
  circle(xcenter,ycenter,radius, sunColor)
  ycenter =  ycenter + 1
  radius = radius + 0.2
  hue =  hue + 1
  g = g - 1
 
}

// The sea
rectangle(0, 85, 100, 5, "#0308ce")

// The sand
rectangle(0, 90, 100, 10, "#C2B280")

