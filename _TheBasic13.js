//----------------------------    1  --------------------------------
console.log('------    1  ---------');
//print all ints from 1 to 255

function oneToTwentyFive(){
    for(var i = 1; i<=5; i++){
        console.log(i);
    }
}

oneToTwentyFive();

//----------------------------    2  --------------------------------
console.log('------    2  ---------');
//print all ints from 0 to 255, with each int print the sum

function oneToTwentyFiveWithSum(){

    let sum= 0;

    for(var i =0 ; i<=5; i++){

        sum = sum + i;
        console.log('This is the current sum',sum);

    }
    return
}

oneToTwentyFiveWithSum();


//----------------------------    3  --------------------------------
console.log('------    3  ---------');
//find max of given array and print

function findMax(){

    let largest = 0;
    let arr = [23,18,29,1981,167,45,85];

    for(var i =0; i<=arr.length; i++){

        if(arr[i]> largest && arr[i]> arr[i+1]){
            largest = arr[i]
        }
        else{
            i++;
        }

    }

    return largest + " is the largest number in the array"

}

console.log(findMax());


//----------------------------    4  --------------------------------
console.log('------    4  ---------');

//create array with all odds from 1-255

function allOdds(){

    let newArr= [];

    for(var i = 1; i<=10; i=i+2){

        newArr.push(i);

    }
    return newArr

}

console.log(allOdds());



//----------------------------    5  --------------------------------
console.log('------    5  ---------');
//give an array and val y, count and print arr vals>y

function greaterThanY() {

    let arr = [137, 85, 45, 13, 99, 10, 21];
    let y = 31;

    let count =0;

    for(var i =0; i<=arr.length; i++){
        if (arr[i]>y ){
            count = count + 1;
            console.log(arr[i], 'is greater than y');
        }
        else{
            i++
        }
    }

    console.log(count, 'numbers are greater than ', y);
    return
}

greaterThanY();



//----------------------------    6  --------------------------------
console.log('------    6  ---------');












