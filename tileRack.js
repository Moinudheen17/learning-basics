function findTile(rack, letter) {
  let i = 0
  for ( let char of rack){
    i = i + 1
    if (char === letter){
      return `Move to position ${i}`
    }
  }
  return "Error: Tile not on rack"
}
