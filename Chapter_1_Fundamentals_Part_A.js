console.log('can you see me?');

//CHAPTER1


//----------------------------    1   --------------------------------
console.log('------    1   ---------');
//pass in a number that counts down to zero and return new array

function countDownToZero(num) {


    var newArr=[];

    for(var i=0; i < num+1; i++) {
        newArr.push(i)
    }

    newArr.reverse();
    return(newArr);
}


var funcInput = (10);
countDownToZero(funcInput);



console.log('from countDownToZero   ', countDownToZero(funcInput));


//----------------------------    2   --------------------------------
console.log('------    2   ---------');
//function takes array w/ 2 numbers: print first return second

function printArrValues(arr){
    // console.log('from printArrValues: first value in arg array  ' , array[0]);

    let lastIndex = arr.length -1;
    let firstVal = arr[0];

    console.log(firstVal, 'is the 1st Val');

    return (arr[lastIndex])
}

const arr2 = [23,78];
printArrValues(arr2);


console.log((printArrValues(arr2)) ,' is the 2nd val');



//----------------------------    3   --------------------------------
console.log('------    3   ---------');

function firstAndLast(arr){


    let arrayLength = arr.length;
    let result = arr[0] + arrayLength;

    return result
}


const functInput3 = [2,4,6,8,10];

firstAndLast(functInput3);

console.log('from #3 ', firstAndLast(functInput3));


//----------------------------    4  --------------------------------
console.log('------    4   ---------');

function greaterThanSecondVal(){

    let arr = [1,3,5,7,9,13];

    for(let i =0; i<=arr.length; i++){

       if(arr[i]> arr[1]){
           console.log(arr[i], " is >  2nd val in array.")
       }
       else{
         i++;
       }

    }
}

greaterThanSecondVal(); //init func


//----------------------------    5  --------------------------------
console.log('------    5   ---------');

function greaterThanSecondValArgArray(arr){

    let newArr = [];
    for(var i =0; i<=arr.length; i++){
        if(arr[i]>arr[1]){
            newArr.push(arr[i]);
        }
        else{
            i++
        }
    }
    console.log('Values greater than arr[1]:  ',newArr.length);
    return newArr
}

let returnVal = [18,12,5,17,23,10];
console.log(greaterThanSecondValArgArray(returnVal),'from #5');


//----------------------------    6  --------------------------------
console.log('------    6   ---------');

function myFunc(num1, num2){

    let temp = [];
    let returnArr = [];

    temp.push(num1,num2);

    for(var i =0; i<temp[0]; i++){
        for(var z=0; z<=0; z++){
            // console.log('test', temp[0]); //DO NOT REMOVE
            returnArr.push(temp[1])
        }
    }

    return returnArr;
}


let num1 =10;
let num2 = 25;

let returnVal2 = myFunc(num1, num2);
returnVal2;

console.log(myFunc(num1, num2));

//----------------------------    7  --------------------------------
console.log('------    7   ---------');

function fitTheFirst(arr){

    console.log("The input array's length is:  ", arr.length );

    for(var i=0; i<arr.length; i++){
        if(arr[i]>arr[0]){
            console.log('too big'  , arr[i]);
        }
        else if(arr[i]<arr[0]){
            console.log('too small  ', arr[i] )
        }

        else{
            console.log('just right', arr[i])
        }
    }
}


const fitArr = [10,21,2,80,99,1,10 ];

fitTheFirst(fitArr);



//----------------------------    8  --------------------------------
console.log('------    8   ---------');

function tempConversion(fahrenheit){

    let celConv = ((fahrenheit -32)*0.5556).toFixed(2);
    console.log(fahrenheit + ' degress Fahrenheit is ', celConv+ ' degrees in Celsius');
}
const fahrenheit = 98;
tempConversion( fahrenheit );




//----------------------------    9  --------------------------------
console.log('------    9   ---------');
function tempConversion2(celsius){
    let farConv = ((celsius/0.556)+32).toFixed(2);
    console.log(celsius + ' degress Celsius is ', farConv+ ' degrees in Fahrenheit');
}

const celsius = 30;
tempConversion2( celsius );








//find the sum:


// var findSumofThisArray = [2,4,6,8,10]; //30
//
//
//
// function findSum(arr){
//
//     let sumResult = 0;
//
//     for(i=0; i < arr.length ; i++){
//         sumResult += arr[i]; //remember, no need for arr[i] = arr[++] <-- you already defined that in the for loop
//     }
//     return sumResult
//
// }
//
// findSum(findSumofThisArray);
//
//
//
// console.log(findSum(findSumofThisArray));
// // find the avg
//
//
// var findAvgArr = [2,4,6,8,10];
//
// function findAvg(arr){
//
//     let avgResult = 0;
//
//
//     for(i=0; i<arr.length; i++){
//         avgResult += arr[i]/arr.length
//
//     }
//     return avgResult
// }
//
//
// var avgAnswer = findAvg(findAvgArr);
//
// console.log(avgAnswer, "this is the result for averages");



// find the largest number in an array

// var theArray = [2,5,1,9,25,18,1996];
//
//
// function findLargest(theArray){
//     let initialArrVal = 0;
//     let largestinArray = [];
//
//
//     for(i=0; i < theArray.length; i++){
//
//         for(z=0; z < theArray[i].length; z++){
//
//             if(theArray[i][z] <  theArray[i][z++])
//
//                 theArray[i][z] = largestinArray;
//             else{
//                 theArray[i][z++] = largestinArray;
//             }
//         }
//         console.log("A", theArray[i]);
//     }
//
//     return largestinArray
// }
//
// console.log(findLargest(theArray));

