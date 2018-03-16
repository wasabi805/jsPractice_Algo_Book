console.log('');
//----------------------------    1  --------------------------------
console.log('------    1  ----------');
console.log('');
//
//

let arr1 = [2,4,6,8,10], num1 = 100;

// console.log('NOTICE THAT temp2 to is undefined?');

function pushFront1(arr, num){

    temp1 = 0;
    temp2 =0;

    for(var i =arr.length; i>0; i--){ // the " -1 " is important so we don't get undefined.
                                    // see below at next example.
        temp1 = arr[i-1];
        temp2 = arr[i];

        // console.log('temp1: ',temp1, 'temp2: ', temp2);


    }

    return arr

}

// console.log('Final', pushFront1(arr1,num1 ));


// console.log('|||||||||||||||||||||||||||||||||||||');
// console.log("Add a ' - ' sign to arr.length to visually make T- Diagraming easier to see:   " );
// console.log('');


function pushFront2(arr, num){

    temp1 = 0;
    temp2 =0;

    for(var i =arr.length-1; i>0; i--){ // the " -1 " is important so we don't get undefined.
        // see below at next example.
        temp1 = arr[i-1];
        temp2 = arr[i];

        console.log('temp1: ',temp1, 'temp2: ', temp2);


    }

    return arr

}

// console.log('Final', pushFront2(arr1,num1 ));
console.log('|||||| FINAL FOR Ex #1  |||||||||');




// FROM ABOVE, placed here for visual reference.
// let arr1 = [2,4,6,8,10], num1 = 100;
function pushFrontFinal(arr, num){

    temp1 = 0;
    temp2 =0;

    for(var i =arr.length; i>0; i--){

        temp1 = arr[i];
        temp2 = arr[i-1];


        arr[i-1] = temp1;
        arr[i]= temp2;

        temp1 = temp2;

        if(arr[i-1] == undefined){
            arr[i-1] = num;
        }


        // console.log('temp1: ',temp1, 'temp2: ', temp2);


    }

    return arr
}

console.log('Final', pushFrontFinal(arr1,num1 ));


console.log('');
//----------------------------    2  --------------------------------
console.log('------    2  ----------');
console.log('');
//
//


//remove and return the VALUE of first element.

function arrayPopFront(){

    let arr =[1110, 2018, 904, 169, 1381];

    value = 0;

    for(var i = 0; i<arr.length; i++){

        value = arr[0];
    }

    return value
}


printVal1 = arrayPopFront();

console.table([printVal1+ ' is the first value in the array']);



console.log('');
//----------------------------    3  --------------------------------
console.log('------    3  ----------');
console.log('');



//NOTE: THIS EXERCISE EXEMPLIFIES SHIFTING VALUES IN AN ARRAY RESULTING IN CLEANER, LEANER CODE.


let arr2 = [3,6,9,12,15,18,21,24], index2 = 3, val2 = 904;

function insertAt (arr, index, num){

    arrCopy = arr;

    temp1=0;
    temp2=0;


    //1st loop
    //  A.) stores val at index
    //  B.) replaces value at index with num arg
    //  C.) sets last value to stored value.

    for(var i=0; i<=arrCopy.length; i++){

        if(i == index) {

            temp1 = arrCopy[i];
            arrCopy[i] = val2;

            arrCopy[arrCopy.length] = temp1;

            break;
        }

    }

    // console.log(temp1, ' : is now temp1', 'I am from after if loop',  arrCopy)

    length = arrCopy.length-1;


    // this loop starts after num inserted from previous loop :

    //2ND loop
    //  D.) starts AFTER inputted index and stores that val as temp2.
    //  E.) replaces value at index with new last value.
    //  F.) sets/replaces last value with [i+2]


    for(var i=index+1; i<arrCopy.length; i++){

        temp2 = arrCopy[i];
        arrCopy[i] = arrCopy[length];

        arrCopy[length] = temp2;

    }

    return arrCopy;


}

//solution # 2
console.log('User inputs index: ', index2, 'as push position.');
console.log('User inputs num: ', val2, 'as number to push.');

console.log(insertAt(arr2,index2,val2));



console.log('');
//----------------------------    4  --------------------------------
console.log('------    4  ----------');
console.log('');
//
//



//return the array VALUE at a given index:
function removeAt() {

    arr =[10,20,30,40,50,60,70];
    index = 4;

    value=0;

    for(var i =0; i<=index; i++){

        if( i == index ){
            value = arr[i];
        }

    }

    return value

}


console.table(['From given index, removed val in arr is: ', removeAt()]);


console.log('');
//----------------------------    5  --------------------------------
console.log('------    5  ----------');
console.log('');
//
//

//CHECK TO SEE IF YOU CAN USE THE DELETE OPERATOR
//SEE: Deleting an array element
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete


function swapPairs() {

    let arr = [1,2,3,4,5];

    temp1 = 0;


    for(var i =0; i<arr.length; i++){

        temp1 = arr[i];
        temp2 = arr[i+1];

        arr[i]= temp2;
        arr[i+1]= temp1;
        i++;

    }

    console.log(arr);

    for(i=0; i<arr.length; i++){

        if(i>0 && arr[i] == undefined){

            arr[i] = arr[i+1];
            delete arr[i+1];
            console.log('test');
        }
    }

    return arr
}


//solution #3 : For arr , Swap pairs of i & i+1
//if last arr val has no pair, do not swap.

console.table([swapPairs()]);





console.log('');
//----------------------------    6  --------------------------------
console.log('------    6  ----------');
console.log('');

// MUTATING ARRAY LENGTH:

//  Moves original/ not duplicates to the front of array
//  Uses counter to increment the front by 1 so any new any originals aren't overwritten
//  Mutate the array length before returning.

function removeDuplicates(){

    applicantNames = [
        'ali','ali','ali','catherine',
        'kayla','kayla','kayla', 'morty',
        'natalie', 'rick', 'tim', 'snowball', 'snowball'
    ];

    arr = applicantNames;

    indexCounter = 0;

    for(var i =0; i<=arr.length+1; i++){

        //this loop prevents the 2nd if statement from running forever
        if(arr[i+1]== undefined) {
            console.log(arr[i-1]);
            arr[i+1]= arr[i-1];
            break;
        }

        //if the current is != to the previous, then the current is not duplicate.
        // move the the current/ different to the front. Front increments each time.
        if(arr[i] !== arr[i-1]){
            arr[indexCounter] = arr[i];
            indexCounter = indexCounter +1;
        }

    }

    //mutate the length of array before returning it.
    arr.length = indexCounter;

    return arr
}
console.table(['These are the names of applicants']);
console.table([removeDuplicates()]);






console.log('');
//----------------------------    7  --------------------------------
console.log('------    7  ----------');
console.log('');





























