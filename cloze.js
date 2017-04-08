var inquirer = require("inquirer");

var questionsList = [
    { questionVar: 'firstPresident' },
    { questionVar: 'capitolCalifornia' },
    { questionVar: 'firstMoonMan' }
]

var i = 0;

var BasicCard = function (front, back) {
    this.front = front;
    this.back = back;
}

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
var capitolCalifornia = new BasicCard("What is the capitol city of California?", "Sacramento");
var firstMoonMan = new BasicCard("Who was the first person to walk on the moon?", "Neil Armstrong");

function getFront(i) {
    var thisQuestionObj = questionsList[i].questionVar;
    var thisQuestion = eval(thisQuestionObj).front;
    return thisQuestion;
}

function getBack(i) {
    var thisAnswerObj = questionsList[i].questionVar;
    var thisAnswer = eval(thisAnswerObj).back;
    return thisAnswer;
}

function doCard(i) {
    inquirer.prompt([
        {
            type: "list",
            name: "flip",
            message: getFront(i),
            choices: [
                "Flip"
            ]
        }
    ]).then(function () {
        console.log("  > " + getBack(i));
        if (i<questionsList.length-1){
            i++;
            console.log("- - - - - - - - - - - - - - - -");
            doCard(i);
        } else {
            console.log("=============================== \n You've finished all your cards!");
        }
    });
}

console.log("\n It's time for Flash Cards! \n===============================");
doCard(i);