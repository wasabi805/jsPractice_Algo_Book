
//----------------------------    1  --------------------------------
console.log('------    1  ---------');

function sweatShirtPricing(qty){

    let cost = 20;

    subtotal = 0;
    discount =0;
    grandTotal =0;


    if(qty==1){
        console.log('Sweatshirt cost is: $',cost )
    }

    else if (qty == 2) {
        subtotal = cost * qty;
        discount = 0.19 * subtotal;
        grandTotal = Math.ceil(subtotal - discount);

        console.log('Sweatshirt cost for an order of', qty, 'is: $', grandTotal, '.00');
    }

    else {
        subtotal = cost * qty;
        discount = 0.35 * subtotal;
        grandTotal = Math.ceil(subtotal - discount);

        console.log('Sweatshirt cost for an order of', qty, 'is: $', grandTotal, '.00');
    }
    ;

}


sweatShirtPricing(4);


console.log('');
//----------------------------    2  --------------------------------
console.log('------    2  ---------');

//skipped
console.log('skipped, revisit later');



console.log('');
//----------------------------    3i  --------------------------------
console.log('------    MODULO work-through example  ---------');
console.log('');


function myBigNum(num){


    step1 = num/100;
    step2 = Math.floor(num/100);
    step3 =  step2%10;

    console.log('how would you get the hundredth digit if number is: ',num, '?');
    console.log('');
    console.log(step1, 'step1 ');
    console.log(step2, 'step2');
    console.log(step3, 'step3');

    //how did did this work? : MODULO DIVIDES the first number n time by the 2nd number THEN returns the remainder.
    //see page 32
}


myBigNum(1998);


console.log('');
//----------------------------    3  --------------------------------
console.log('------    3  ---------');
console.log('');
//https://stackoverflow.com/questions/1723716/how-to-concatenate-two-numbers-in-javascript
//https://coderwall.com/p/5tlhmw/converting-strings-to-number-in-javascript-pitfalls


//see chapter 2 fundamentals pg29-20 for sumToOne for an example.

function extractDigit(num, digit){

    myNum = num;

    let arr=[], length=0, result=0;

    while(myNum){
        arr.push(myNum%10);
        myNum=Math.floor(myNum/10);
        length=arr.length;
    }
    //use below to check if digit is within
    // console.log('length is:',length-1,  ' digit is: ',digit);

    if(digit>=0 && digit<=length-1){
        result=arr.splice(digit,1);

        return result.pop() + ' is the number corresponding to the input digit.'
    }

    else{

        if(digit>length-1 || digit< length-1){
            return 'invalid value for digit ';
        }
    }
}

console.log(extractDigit(1824, 0));
//given num and digit, num =num,    digit0=ones value
//                                  digit2=tens value
//                                  digit2=hundreds value
//                                  digit2=thousands value..etc



console.log('');
//----------------------------    4  --------------------------------
console.log('------    4a(positive digits only)  ---------');
//NOTE: later on figure out how do while works.
//see: https://www.tutorialspoint.com/javascript/javascript_while_loop.htm


//STUDY THE CRAP OUT OF THIS PROBLEM!
//come back to solving negative numbers later:

function mostSignificant (num){

    let number = num, arr = [];

    let smallResult =0;
    let x =10;

    // console.log('before while and 2nd while: ',arr);

    var i =0;
    while(number>1){
        arr.push(number%10);
        number = Math.floor(number/10);
    }


    while(number> 0 && number< 1){

        number= number * x;
        smallResult = Math.floor(number);
        arr.push(smallResult);
        i++;
        // console.log('After WhileLOOP: ','arr-->', arr);


    }
    // console.log('this is AFTER BOTH stmnt-->', arr);

    result = arr.pop();

    return result+ ': IS THE MOST SIGNIFICANT DIGIT'

}

console.log(mostSignificant (0.6327836765));








