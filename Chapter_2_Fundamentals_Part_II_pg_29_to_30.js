
//----------------------------    1  --------------------------------
console.log('------    1  ---------');


function threeFives(){

    let sum =0;


    for(var i=100; i<= 4000000; i++){
        sum = sum +i;
    }


    if(sum%3===0 && sum%5===0){
        console.log('number is divisible by 3 & 5: value is considered invalid.');
    }
    else{
        if(sum%3===0){
            console.log(sum, ' is divisible by 3');
        }
        else{
            if(sum%5===0){
                console.log(sum, ' is divisible by 5');
            }
        }
    }
}

threeFives();



//----------------------------    2  --------------------------------
console.log( '' );
console.log('------    2  ---------');
console.log('GENERATE COIN CHANGE');
console.log( '' );
//GENERATE COIN CHANGE

function clearChange(change) {

    let remainder = 0;
    let quartersQty = 0;

    let dimesQty = 0;

    let nicklesQty = 0;
    let penniesQty = 0;


    for (let i = change; i = i; i--) {

        quartersQty = Math.floor(change / 25);
        remainder = change % 25;

        dimesQty = Math.floor(remainder / 10);
        nicklesQty = Math.floor(remainder / 5);
        penniesQty = remainder;

        if (remainder >= 10 && remainder < 25) {
            dimesQty;
            remainder = remainder % 10;
        }

        if (remainder >= 0 && remainder <= 5) {
            // console.log(nicklesQty, 'test');

            nicklesQty = 0;
            // console.log(remainder, '******');
        }

        if (remainder >= 5 && remainder < 10) {
            nicklesQty = 1;
        }

        if (remainder >= 0 && remainder >= 5) {
            // console.log('pennies', remainder);
            penniesQty = remainder % 5;
        }

        if (remainder < 5) {
            penniesQty = remainder;
        }
    }

    console.log('You gave me: ' , change , ' cents');
    // console.log('remainder: ', remainder);
    console.log( '' );
    console.log('There are', quartersQty, 'quarters');
    console.log('There are', dimesQty, ' dimes' );
    console.log('There are', nicklesQty, ' nickles');
    console.log('There are', penniesQty, ' pennies');
}
clearChange(23);


console.log( '' );
//----------------------------    3  --------------------------------
console.log('------    3  ---------');






function messyMath(num) {

    let counter = 0;
    let sum = 0;

    // let skipMe = new Boolean(false);

    // console.log(skipMe);

    for(var i =1; i<=num; i++){

        counter = counter+1;

        if(counter%3===0){
            // console.log('will omit');
            counter = counter+1;
            i++
        }

        if(counter%7===0 ){
            // console.log('test if divisible by 7');
            counter = counter+1;
            sum=sum +(i*2);
            i++
        }

        if(counter===num/3){
            // console.log(counter,'verify break statement works?');
            sum = -1;
            return "RETURNED "+ sum+ " : brake case activated, counter is equal to 1/3 of num's value"
        }


        sum=sum+i;

        // console.log('this is sum', sum);


    }
    return("Final Sum is: "+ sum)
}

console.log(messyMath(8));

console.log( '' );




//----------------------------    4  --------------------------------
console.log('------    4  ---------');

function twelveBarBlues() {

    let arr= ['chick', 'boom', 'chick'];
    let count =0;

    for(var i=0; i<12; i++){

        count=count+1;

        console.log(count, arr[0],arr[1],arr[2]);
    }

}

twelveBarBlues();


//----------------------------    5  --------------------------------
console.log('------    5  ---------');
console.log( '' );


//see: https://www.thepolyglotdeveloper.com/2015/01/fibonacci-sequence-printed-javascript/


function fibonacci(num) {

//0,1,1,2,3,5,8,13,21

    let a = 0, b=1 , fib=1;

    for(var i = 0; i<=num; i++){
        fib = a+b;
        a= b;
        b=fib;
    }
    return fib
}

let startNUm = 5;

console.log('fibonacci given start at',startNUm , ', output is:',(fibonacci(startNUm)));


//----------------------------    6  --------------------------------
console.log('------    6  ---------');
console.log( '' );

function sumToOne(num){

    let number = num;
    arr = [];

    while(number){
        arr.push(number%10);
        number=Math.floor(number/10);
    }

    arr = arr.reverse();

    let a=0, b=0, sum=0;

    for(var i = 0; i<arr.length+1; i++){

        sum = a+b;
        temp1 = sum;
        temp2 = arr[i+1];

        a = arr[i];
        b = arr[i+1];

        b=temp1;

        console.log('instance',i,'a:',a , 'b:', b, 'sum: ',sum, );

    }

    let arr2=[];
    let number2 = sum;

    while(number2){

        arr2.push(number2%10);
        number2=Math.floor(number2/10);

    }

    let x=0, y=0, sum2 =0;

    for(var z=0; z<arr2.length+1; z++){

        sum2 = x+y;
        temp3 = sum2;
        temp4 = arr[z+1];

        x=arr2[z];
        y=arr2[z+1];

        y=temp3;

        console.log('2ndinstance',z,'x:',x , 'y:', y, 'sum2: ',sum2, );

    }

    return `${sum2} this is the return`
}


let startNum6 = 928;

console.log(sumToOne(startNum6));



//----------------------------    7  --------------------------------
console.log('------    8  ---------');
console.log( '' );


















