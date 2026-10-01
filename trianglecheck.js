// Create a function called `determineTriangleType`.
function determineTriangleType(x,y,z){
  if (x ===0 || y===0 || z===0||x+y<z||y+z<x||z+x<y){
    return "invalid"
  }
  else if( x===y && y===z && z === x){
    return "equilateral"
  }
  else if (x===y ||y===z||z===x){
    return "isosceles"
  }
  else {
    return "scalene"
  }
// It should have three inputs for the three sides of the triangle.
//
