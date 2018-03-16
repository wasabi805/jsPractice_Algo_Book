console.log('Chapter_1_Fundamentals_Part_C');


//----------------------------    1  --------------------------------
console.log('------    1   ---------');


//NOTE: Refrence https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/
//for mutating vs non mutating methods

function onlyKeepTheLastFew() {

    let arr = [10,5,23,4,20,8,10];
    let num = 3;


    for(var i = arr.length ; i > -1  ; i--){
        if(i<=num){
            arr.shift()
        }
    }

    return arr

}

console.log(onlyKeepTheLastFew());


//----------------------------    2  --------------------------------
console.log('------    2  ---------');

function findXint () {

    let m = 1;
    let b = -5;

    const xInt = (-b/m);

    console.log('X intercept is: ', xInt);


}

findXint();


//----------------------------    3  --------------------------------
console.log('------    3  ---------');
//see https://stackoverflow.com/a/11552190/7857134


function whatHappensToday(){

    let disaster = Math.random();

    console.log(disaster);

    if(disaster <= 0.10){
        console.log('Volcanos are erupting!');
    }

    else{

        if(disaster > 0.11 && disaster <= 0.19  ){
            console.log('Tsunami are big waves');
        }
        else{
            if(disaster >= 0.20 && disaster <=0.24){
                console.log('Earthquake!!!');
            }
            else{
                if(disaster>= 0.25 && disaster <=0.30 ){
                    console.log("It's a cold blizzard");
                }
                else{
                    console.log('No Disasters today!!  ')
                }
            }
        }
    }
}


whatHappensToday();

//ASK FOR HELP
//----------------------------    5  --------------------------------
console.log('------    5  ---------');



function whatReallyHappensToday () {

    let disaster = [
        'volcano', 'Tsunami', 'earthquake', 'blizard', 'meteor', 'Sunny Day'
    ];


    let chance = [0.10, 0.15, 0.20, 0.25, 0.30];
}




//----------------------------    6  --------------------------------
console.log('------    6  ---------');



function soaringIQ(){

    let BogdanInititalIQ = 101;
    let getSmarter = 0.01;
    let brainMeter = 0;

    for(var days = 0; days<=98; days++){

        brainMeter = BogdanInititalIQ + getSmarter;

        getSmarter = getSmarter + 0.01;
        // console.log(getSmarter,'lllll')
    }

    return brainMeter

}

console.log(soaringIQ());



//----------------------------    7  --------------------------------
console.log('------    7  ---------');


function letterGrades(){

    let submitTest =[0.73, 0.90, 0.84, 0.91, 0.66, 0.97];


    let yourComment = [
        'A for Outstanding',
        'B is great',
        'C not too bad',
        'D: stay motivated and keep trying!'
    ];

    for(var i = 0; i <submitTest.length; i++){
        if(submitTest[i]<=1 && submitTest[i] >= .9){
            console.log(yourComment[0]);
        }
        else{
            if(submitTest[i]<=0.89 && submitTest[i]>=0.80){
                console.log(yourComment[1]);
            }
            else{
                if(submitTest[i]<=0.79 && submitTest[i]>=0.70){
                    console.log(yourComment[2]);
                }
                else{
                    console.log(yourComment[3])
                }
            }
        }
    }

}

letterGrades();


//----------------------------    8  --------------------------------
console.log('------    8  ---------');


