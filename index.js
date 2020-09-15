// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * One uses a closure and the other doesnt.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * The first one uses a closure.I can tell because there is a function nested within another function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * 
 * The counter1 code would be preferable if we wanted the return to remember the previous return value.The code for counter2 would be preferable to always return the same value.  
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  return Math.floor(Math.random() * Math.floor(3));

}

console.log(inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb,innings){
  let final = {
    Home: 0,
    Away: 0
  }
for(i = 0; i < innings; i++){
    final.Home = final.Home + cb();
    final.Away = final.Away + cb();
  
}
return final
}

console.log(finalScore(inning,9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore (cb,innings) {
let scores = [ {home: 0,away: 0},
               {home: 0,away: 0},
               {home: 0,away: 0},
               {home: 0,away: 0},
               {home: 0,away: 0},
               {home: 0,away: 0},
               {home: 0,away: 0},
               {home: 0,away: 0},
               {home: 0,away: 0},
]

 
for(i = 0; i < innings; i++){
  scores[i].home = scores[i].home + cb();
  scores[i].away = scores[i].away + cb();  
}
scores[1].home = scores[0].home + scores[1].home
scores[2].home = scores[1].home + scores[2].home
scores[3].home = scores[2].home + scores[3].home
scores[4].home = scores[3].home + scores[4].home
scores[5].home = scores[4].home + scores[5].home
scores[6].home = scores[5].home + scores[6].home
scores[7].home = scores[6].home + scores[7].home
scores[8].home = scores[7].home + scores[8].home

scores[1].away = scores[0].away + scores[1].away
scores[2].away = scores[1].away + scores[2].away
scores[3].away = scores[2].away + scores[3].away
scores[4].away = scores[3].away + scores[4].away
scores[5].away = scores[4].away + scores[5].away
scores[6].away = scores[5].away + scores[6].away
scores[7].away = scores[6].away + scores[7].away
scores[8].away = scores[7].away + scores[8].away

return`    1st inning: ${scores[0].home} - ${scores[0].away}
    2nd inning: ${scores[1].home} - ${scores[1].away}
    3rd inning: ${scores[2].home} - ${scores[2].away}
    4th inning: ${scores[3].home} - ${scores[3].away}
    5th inning: ${scores[4].home} - ${scores[4].away}
    6th inning: ${scores[5].home} - ${scores[5].away}
    7th inning: ${scores[6].home} - ${scores[6].away}
    8th inning: ${scores[7].home} - ${scores[7].away}
    9th inning: ${scores[8].home} - ${scores[8].away}
    
    Final Score: ${scores[8].home} - ${scores[8].away}`


}




function scoreboard(cb2,cb1,innings) {
 return cb2(cb1,9)
    }

console.log(scoreboard(getInningScore,inning,9))

