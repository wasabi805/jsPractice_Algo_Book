console.log('can you see me?');

// function example(){
//     let arr =[1,3,5,7];
//     for(var i=0; i<arr.length; i++){
//         console.log(arr[i])
//     }
// }
//
// example();


console.log('------    1   ---------');

function makeItBig(){
    let arr = [-1,3,5,-5];

    for(var i =0; i<arr.length; i++){
        if(arr[i]>0){
            arr[i]= 'big!'
        }
    }
    console.log(arr);
}

makeItBig();


console.log('------    2   ---------');

//see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
//under Examples -> Getting the maximum element of an array

function printLowRetHigh(arr2){

    let tempLargest = arr2;
    let tempSmallest = arr2;


    let largestVal= tempLargest.reduce(function (a,b) {
        return Math.max(a,b)
    });

    let smallestVal = tempSmallest.reduce(function (c,d) {
        return Math.min(c,d)
    });

    console.log(smallestVal, 'is the smallest logged from array');

    return largestVal
}

const arr2 = [18,29,9999999999,37,2,1000,904,87,169,2014];

const result2 = printLowRetHigh(arr2);

 console.log(result2, ' is the largest num returned from the array');




 //-----------------------------------------------------
//see: https://stackoverflow.com/a/5016327/7857134
console.log('------    3   ---------');


function second2Last(arr) {

    let indexOf2ndToLast = 0;
    let tempArr = [];

    for(var i=0; i<arr.length; i++){
        indexOf2ndToLast = arr.length -2;

       if(arr[i] % 2 ===1){
           // console.log( arr[i] +' is an odd val');
           tempArr.push(arr[i]);
       }

    }

    console.log('print secondToLastVal:', arr[indexOf2ndToLast]);

    let tempArr2= tempArr.reverse().pop();

    return tempArr2;


}
let arr3 = [6,2,88,7,83,4,99,20];

second2Last(arr3);

console.log(second2Last(arr3),' returned first odd from func');




//-----------------------------------------------------
console.log('------    4   ---------');

function theDoubler(){

    let arr4 = [2,4,6, 8, 10, 20];

    let tempArr = [];


    for(var i =0; i<arr4.length; i++){
        tempArr.push((arr4[i]*2));

    }

    return tempArr;
}

theDoubler();

console.log('return from newArray  ',theDoubler());


//-----------------------------------------------------

console.log('------    5   ---------');


function countPositive(){

    let arr5 = [-30,2,-48,12,6,20];
    let counter =0;

    for(var i =0; i<arr5.length; i++){


        if(arr5[i]>0){
            counter = counter+1 ;
        }

    }

    arr5.push(counter);
    console.log('There are ',counter, 'values that are positive in the array');
    return arr5
}


countPositive();

console.log("This ha counter val of positive int's added to end of given array  " + countPositive());






//-----------------------------------------------------
// see: https://stackoverflow.com/a/4549907/7857134
// in order to repeat a string
console.log('NOTE: this will come in handy for authentication.');

console.log('------    6   ---------');


function comesInThrees(arr){

    let oddCounter = 0;
    let evenCounter= 0;

    for(var i =0; i<=arr.length; i++){
        if(arr[i]%2 ===1 && arr[i+1]%2 ===1 && arr[i+2] %2 ===1){
            oddCounter = oddCounter+1;
        }
        else{
            if(arr[i]%2 ===1 && arr[i+1]%2 ===1 && arr[i+2] %2 ===0){
                evenCounter = evenCounter+1
            }
        }
    }

    //print helpers-------------

    function repeatOddStatement(str, times) {
        return(new Array(times+1).join(str))
    }


    function repeatEvenStatement (str, times) {
        return(new Array(times+1).join(str))
    }

    console.log(repeatEvenStatement('Even More So! ', evenCounter));
    console.log(repeatOddStatement("That's odd",oddCounter ));
}


let arr6 = [3,3,4,4,1,1,1,6,3,2,2,2,5,2,2,2]; // 1 set ODD, 2 sets EVEN

comesInThrees(arr6);



//-----------------------------------------------------

console.log('------    7   ---------');




function incrementByOne (){
    let givenArray = [0,1,2,3,4,5,6];

    for(var i=1; i < givenArray.length; i=i+2){
        console.log('Add 1 to every other: ' ,givenArray[i]+1);
    }

}

incrementByOne();

//-----------------------------------------------------

console.log('------    8   ---------');

//replace each string with an index

function giveIndexToString(arr) {
    for(var i=0; i<arr.length; i++){

        arr[i] = i;
    }

    return arr
}


const arr8 = ['here','is', 'a', 'string' ,'to', 'test' ];
giveIndexToString(arr8);

console.log(giveIndexToString(arr8));


//-----------------------------------------------------

console.log('------    9   ---------');

//skip first val in array and inc 7 to each index.
function addSevenToMost(arr){

    let newArr = [];

    console.log('this is new arr', newArr);

    for(var i=1; i<arr.length; i++){

        let incBy7 = 7;

        newArr.push(arr[i]+ incBy7);

    }
    return newArr
}


const arr9 = [0,7,14,21,28,100];
addSevenToMost(arr9);

console.log(addSevenToMost(arr9));

//-----------------------------------------------------

console.log('------    10   ---------');

function reverseArray(){

    let myArr = [1,2,3,4,22];
    let temp= 0;
    let myNewArr = [];


    for(var i =myArr.length ; i = i  ; i--){

        // myArr.push(myArr[i-1]);
        temp = (myArr[i-1]);
        myNewArr.push(temp);

    }

    myArr = myNewArr;

    return myArr
}


console.log('here is the input array mutated and returned in reverse order', reverseArray());



//-----------------------------------------------------

console.log('------    11   ---------');


function makeItNegative() {

    let arr = [-2,4,-6,8,10,12,-14,16];
    let newArray =[];

    for(var i = 0; i<arr.length; i++){

        if(arr[i] <0 ){
            newArray.push(arr[i]);
        }
        else{
            newArray.push(arr[i]*-1)
        }

    }

    console.log(newArray);
}

makeItNegative();




//-----------------------------------------------------

console.log('------    12   ---------');


function imHungry (arr){

    for(var i =0; i<arr.length; i++){

        if(arr[i] == 'food'){
            console.log("Yummy!")
        }

        else{
            console.log("I'm Hungry!")
        }
    }

    return
}

const arr12 = ['rocks', 'food', 'brokenGlass', 'rustyNails', 'food', 'food', 'food', 'food'];

imHungry(arr12);




//NOT COMPLETED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//-----------------------------------------------------

console.log('------    13   ---------');

function swapper(arr){

    let tempfirst =arr[0];
    let templast = arr[arr.length-1];
    let tempA = 0;
    let tempB = 0;
    let counter = 0;

    for(var i=0 ; i<arr.length; i++){


        counter = counter - 1;

        tempA = arr[i];
        tempB = arr[arr.length + counter];



        //
        arr[i]= tempB;
        arr[arr.length-1] = tempA;


    }

    return arr



}


const arr13 = [1,2,3,4,5,6];
console.log(swapper(arr13));



//-----------------------------------------------------

console.log('------    14   ---------');
//takes an array and num, multiply all values by num


function scaleTheArray(arr,num) {

    for(var i =0; i<arr.length; i++){

        arr[i]=(arr[i]*num)

    }
    return arr
}

console.log(scaleTheArray([2,4,6,8,10], 2));