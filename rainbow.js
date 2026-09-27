// Draw 100 beautiful rectangles
let left = 0
let top = 0
let width = 1
let height =100
let saturation = 50
let hue = 0
let lightness = 50
repeat(100) {
  let color = hsl(hue,saturation,lightness)
  rectangle(left,top,width,height,color)
  left = left + 1
  hue = hue + 3
  
}
