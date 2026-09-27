// Roll the dice
let attack = roll(20)
announce(attack)
let damage  = roll(12)
announce(damage)
let bonus = roll(10)
let total = damage + bonus
announce(bonus)
strike(attack,total)