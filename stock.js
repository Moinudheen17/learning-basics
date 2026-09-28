// Track your money on the stock market
let balance = 10
let year = 2026
repeat(20){
  let growth = marketGrowth(year)/100
  balance = balance  + (balance*growth)
  reportTax(year, balance)
  year = year + 1
}
announceToFamily(balance)
