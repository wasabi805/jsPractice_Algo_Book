console.log('');
//----------------------------      ---------------------------------
console.log('------    BRIEFING EXAMPLE  ---------');
console.log('');

//see: FUNCTION EXPRESSIONS ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
//ex.) storing function WITH name inside var: Storing function WITHOUT name inside var is anonymous func.
//HERE, we give name to function stored inside var so we can call the function on itself to be used EXCLUSIVELY WITHIN
// the scope INSIDE the variable.




var factorial = function fac(n) {

    result = n < 2 ? 1 : n * fac(n - 1); //fac(n-1) is the result from the previous time we ran the function
    return result
};

console.log(factorial(4) + ' :result from mozilla');


//Later, check to see if you could rewrite Fibanacii code with the ternary operator



console.log('');
//----------------------------    1a  --------------------------------
console.log('------    1a  ---------');
console.log('');

//see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//GETTING A RANDOM INT BETWEEN TWO VALUES


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
// " gets altered /THE MALE"

const playerRolls = [];
const forStats = [];
const forStatsAndSum =[];




function rollOne() {

    let min = Math.ceil(1), max = Math.floor(7);
    let rollDice = Math.floor(Math.random()*(max-min))+min;

    return rollDice
}

rollOne();
console.table(['Your initial roll is a: '+ rollOne()]);




console.log('------    1b  ---------');



function playFives(num) {

    let arr = playerRolls;
    let msg1 = "That's good Luck! You rolled a: ";
    let msg2 = 'You rolled a: ';

    for(var i =0; i<=num; i++){

        if(rollOne() === 5){
            resultLog1 = msg1+rollOne() ;

            arr.push(resultLog1)
        }
        else{

            resultLog2 = msg2+rollOne();
            arr.push(resultLog2)
        }

    }
    return arr

}
console.table([playFives(5)]);



console.log('------    1c  ---------');

function playStats(){

    let arr = forStats;
    let arr2 =[];

    for(var i= 0; i<=8; i++){
        arr.push(rollOne())
    }

    min= arr.reduce(function (a,b) {
        return Math.min(a,b);
    });

    max = arr.reduce(function (a,b) {
        return Math.max(a,b);
    });

    arr2.push(min + ' is the min', max + ' is the max');

    return arr2


}

console.table([playStats()]);



console.log('------    1d ---------');


function playStats2(){

    let arr = forStatsAndSum;
    let arr2 = [];
    let arr3 = arr;
    let results =[];



    for(var i= 0; i<8; i++){
        arr.push(rollOne())
    }

    min= arr.reduce(function (a,b) {
        return Math.min(a,b);
    });

    max = arr.reduce(function (a,b) {
        return Math.max(a,b);
    });

    arr2.push(min + ' is the min', max + ' is the max');

    console.log(arr);


    sum= 'The sum is: '+ arr3.reduce(function (a,b) {return a+b},0);
    minResult = 'The min is: '+min;
    maxResult = 'The max is: ' +max;

    results.push(sum,minResult,maxResult );

    return results

}

console.table([playStats2()]);


console.log('------    1e ---------');


function playStats3(num) {

    let arr = [];
    let arrSum =arr;
    let results = [];


    for(var i=0; i<num; i++){
        arr.push(rollOne());
    }

    min= arr.reduce(function (a,b) {
        return Math.min(a,b);
    });

    max = arr.reduce(function (a,b) {
        return Math.max(a,b);
    });

    sum = arrSum.reduce(function (a,b) {
        return a+b
    },0);

    results.push('When I roll '+ num +' times,', 'The sum is: '+ sum,'Min is: '+ min, 'Max is: '+max);


    return results

}


console.table([playStats3(4)]);


console.log('------    1f ---------');


function playStats4(num) {

    let arr = [];
    let arrSum =arr;
    let results = [];


    for(var i=0; i<num; i++){
        arr.push(rollOne());
    }

    min= arr.reduce(function (a,b) {
        return Math.min(a,b);
    });

    max = arr.reduce(function (a,b) {
        return Math.max(a,b);
    });

    sum = arrSum.reduce(function (a,b) {
        return a+b
    },0);

    avg = sum/arr.length;


    console.log(arr);
    results.push('When I roll '+ num +' times,', 'The sum is: '+ sum, 'The average is: '+avg,'Min is: '+ min, 'Max is: '+max);


    return results

}


console.table([playStats4(4)]);


console.log('');
console.log('------    2 ---------');


function statsUntilDouble(){

    let min = Math.ceil(1), max = Math.floor(21);
    let rollDice = Math.floor(Math.random()*(max-min))+min;

    return rollDice

}

console.log('My init roll is: '+statsUntilDouble());




function keepRollingTillTheyMatch() {

    let arr=[];


    let i=0;

    while(i>-1){

        statsUntilDouble();

        arr.push(statsUntilDouble());


        if(arr[i-1] === arr[i]){

            resultsArr=[];

            min = arr.reduce(function (a,b) {
               return Math.min(a,b)
            });

            max = arr.reduce(function(a,b){
                return Math.max(a,b)
            });

            sum = arr.reduce(function (a,b) {
                return a+b
            },0);

            avgi = sum/i;

            avgii = Math.round(avgi*100)/100;

            // Use Math.round(num * 100) / 100

            index=i;
            indexValue=arr.pop();

            resultsArr.push(index,indexValue,min,max, avgii);


            return resultsArr
        }

        else{
            i++
        }

    }
    // SEE this to compare while loop vs for loop:
    // for(var i=0; i<10; i++){
    //     statsUntilDouble();
    //     arr.push(statsUntilDouble());
    //
    //     if(arr[i] == arr[i-1]){
    //         console.log('break here', arr[i]);
    //         break ;
    //
    //     }
    //
    //     console.log(arr[i-1], arr[i]);
    // }

};

let resultIndex = keepRollingTillTheyMatch()[0];
let resultValue = keepRollingTillTheyMatch()[1];
let resultMin = keepRollingTillTheyMatch()[2];
let resultMax = keepRollingTillTheyMatch()[3];
let resultAvg = keepRollingTillTheyMatch()[4];


console.table(['on turn '+resultIndex+ ' , you rolled  '+resultValue+ ' twice in a row!' ]);

console.table(['The min for this roll was: ', resultMin]);
console.table(['The max for this roll was: ',resultMax]);
console.table(['The avereage for this roll was: ',resultAvg]);




console.log('');
console.log('------    3 ---------');



//----------CONSTANTS---------------------------



const resetPosition = function () {

    moveHistory.moves = [];
    moveHistory.xDistance = [];
    moveHistory.yDistance = [];

};


const moveHistory = {

    moves : [],
    xDistance: [],
    yDistance: [],
    msg :[
        'Traveled a total of ',
        ' steps in the xDirection.',
        ' steps in the yDirection.',
        'You are ',
        ' away steps from home (0,0). '

    ]

};

const msg = moveHistory.msg;

//----------FUNCTIONS---------------------------



function moveBy(num1, num2){

    let x = num1, y=num2;

    let movesList = [];
    let xHistory = 0;

    for(var i=0; i<=0; i++){

        movesList.push(x,y); // set of x&y per iteration
        moveHistory.moves.push(movesList); // push that iteration to outside of func

        xHistory = x;
        yHistory = y;


        moveHistory.xDistance.push(xHistory);
        moveHistory.yDistance.push(yHistory);

    }

    // console.log(xHistory, 'from inside func')

};


moveBy(1, 1);

moveBy(1, 1);

moveBy(1, 1);
// resetPosition();
moveBy(1, 1);

console.log('global moveHistory ',moveHistory );



//----------------------------------------------


function xLocation(){

    let arr = moveHistory.xDistance;
    let sum =0;



    for(var i=0; i<arr.length-1; i++){

        temp = arr[i];

        sum = temp + arr[i+1];

        arr[i]=sum;

        arr[i+1] =arr[i];

    }

    if(arr.length ==1){ //case for single move

    sum = sum + arr[i];
    return sum

    }

    return sum

}

// console.log(moveHistory.xDistance, 'moveHistory.xDistance');

console.table([msg[0] + xLocation()+ msg[1]]);

//----------------------------------------------

function yLocation(){

    let arr = moveHistory.yDistance;
    let sum =0;


    for(var i=0; i<arr.length-1; i++){

        temp = arr[i];

        sum = temp + arr[i+1];

        arr[i]=sum;

        arr[i+1] =arr[i];

    }

    if(arr.length ==1){ //case for single move

        sum = sum + arr[i];
        return sum
    }

    return sum

}

// console.log(moveHistory.yDistance, 'moveHistory.yDistance');
console.table([msg[0] + yLocation()+ msg[2]]);



//assuming she moves diagonally, what is her distance from home?
//ie, home = 0,0 ===> find slope to determine hypotenuse .

function howFarFromHome(obj){

    let arr1 = obj.xDistance; arr2 = obj.yDistance;

    xSquared = Math.pow(arr1.pop() , 2);
    ySquared = Math.pow(arr2.pop() , 2);

    hypot = xSquared+ySquared;

    distance = Math.sqrt(hypot, 2);

    result = distance.toFixed(2);

    return result


}


console.table([moveHistory.msg[3]+ howFarFromHome(moveHistory)+ moveHistory.msg[4]]);














