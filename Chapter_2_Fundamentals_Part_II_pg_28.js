//----------------------------    1  --------------------------------
console.log('------    1  ---------');



function sigma( ) {

    let num1 = 5;
    let num2 = 15;

    let indexVals =[];
    let sum =0;

    let errMsg = '';
    let successMsg = 'the sum of: ' + indexVals.toString()+  ' ARE EQUAL to num2: '+  num2 ;


    for(var i=1; i<= num1; i++){

        indexVals.push(i);
        sum= sum+i;

        if(num2 == sum && num2%num1 === 0){
            return successMsg
        }

        else{
            errMsg = 'The of values of : ' + indexVals + ' DO NOT sum up to ' + num2;
        }
    }

    if(num2 !== sum){
        return errMsg
    }

}

console.log(sigma());


//----------------------------    2  --------------------------------
console.log('------    2  ---------');



function factorial(num){

    let sum = 1;

    for(var i =1; i<=num; i++){


        sum = sum * i;


        if(sum % num == 0 ){
            console.log('success');

        }
        else{
            console.log(
                'any number multipled by itself then dived' +
                'by itself will always factor once');
        }

    }

    console.log('AT THE END, sum is: '+sum);
}


factorial(9);






//----------------------------    3  --------------------------------
console.log('------    3  ---------');


//STAR ART

function drawLeftStars(num){


    let field = [];

    for(var i = 0; i<=num-1; i++){
        field.push('*');
    }
    console.log(field);

}

drawLeftStars(10);


//-------------------------------------------

function drawRightStars(num){

    let field =[];

    for(var i =0; i<=75 ; i++){

        if(i< num){
            field.push('@');
        }
        else if (i >= num && i < 75 - num) {
            field.push(' ');
        }
        else {
            if (i >= 75 - num && i < 75) {
                field.push("*");
            }
        }

    }

    console.log(field);

}

drawRightStars(10);


//-------------------------------------------


//refrence:
//0--------------------------32.5--------------------------75
            //num[i] = 1,2,3,4,5,6,7,8,9,10
//              bisectVal = 75/2
//startRange = 0 <---------------- 26 (32.5 - 5)
//endRange   = 37 ---------------> 75 (32.5 +5)


function drawCenteredStars(num){

    let field =[];

    let middle = 32.5;
    let bisectVal = num/2;
    let startIndexRange = middle - bisectVal;
    let endIndexRange = middle + bisectVal;

    console.log(startIndexRange);
    console.log(endIndexRange);


    for(var i =0; i<75 ; i++){

        if(i < startIndexRange ){
            field.push("@");
        }
        else{
            if(i> startIndexRange && i< endIndexRange ){
                field.push("*");
            }
            else{
                if(i>endIndexRange){
                    field.push('@');
                }
            }
        }
    }

    console.log(field);

}

drawCenteredStars(10);




