function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};
console.log(mondayWork());
console.log(mondayWork("work from home"));

function wrapAdjective(visualFlair = '*') {
    return function(adjective = 'special') {
        return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
}
const encouragingPromptFunction = wrapAdjective('*');
console.log(encouragingPromptFunction('incredible'));
const encouragingBarsFunction = wrapAdjective('||');
console.log(encouragingBarsFunction('awesome'));