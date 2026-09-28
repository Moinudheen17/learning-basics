// Look at the camp and take every action Annalyn safely can
// everyone is awake
if (knightIsAwake()&&archerIsAwake()) {
  spy()
}
//whole camp is asleep but dog doing
else if (!knightIsAwake()&&!archerIsAwake()&&!prisonerIsAwake()){
  if (!dogIsBehaving()){
    fastAttack()
  }
  else if (dogIsBehaving()){
    fastAttack()
    freePrisoner()
  }
}
//knight on watch but archer asleep
else if(knightIsAwake()&&!archerIsAwake()&&!prisonerIsAwake()){
  if (!dogIsBehaving()){
    spy()
  }
 
}
//prisoner is awake while camp is asleep
else if (!knightIsAwake()&&!archerIsAwake()&&prisonerIsAwake()){
  if (!dogIsBehaving()){
    spy()
    signalPrisoner()
    fastAttack()
    freePrisoner()
  }
}
//archer is awake and prisoner is awake and dog is behaving
else if (!knightIsAwake()&&archerIsAwake()&&prisonerIsAwake()){
  if(dogIsBehaving()){
    spy()
    fastAttack()
  }
}
