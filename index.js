function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Implementing mondayWork function
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Implementing wrapAdjective function
  const wrapAdjective = function(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  };
  