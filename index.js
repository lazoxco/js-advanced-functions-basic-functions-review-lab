// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(work="go to the office") {
  return `This Monday, I will ${work}.`
}

function wrapAdjective(star="*"){
  return function(adj="special") {
    return `You are ${star}${adj}${star}!`
  }
}

const Calculator = {
  add: function(a, b) {
    return a + b
  },
  subtract: (a, b) => {
    return a - b
  },
  multiply: (a, b) => {
    return a * b
  },
  divide: (a, b) => {
    return a / b
  }
}

function actionApplyer(start, functions) {
  for (let i = 0; i < functions.length; i++) {
    start = functions[i](start)
  }
  return start;
}