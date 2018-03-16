console.log('');
//----------------------------    1  --------------------------------
console.log('------    1  ----------');
console.log('');
//
//
function weekdayName(num) {

    let msg = 'Invalid Input: Please pick a number between 1-7';

    if(num<=0 || num>=8){
        return msg
    }
    else{
        switch(num){
            case 1:
                msg = 'Sunday';
                break;

            case 2:
                msg = 'Monday';
                break;

            case 3:
                msg = 'Tuesday';
                break;

            case 4:
                msg = 'Wednesday';
                break;

            case 5:
                msg = 'Thursday';
                break;

            case 6:
                msg = 'Friday';
                break;

            case 7:
                msg = 'Saturday';
                break;

        }

    }

    return 'Today is: '+ msg

}

//solution #1
console.table([weekdayName(6)]);





console.log('');
//----------------------------    2  --------------------------------
console.log('------    2  ----------');
console.log('');
//
//
function weekdayName2(num) {

    let msg1 = 'Invalid Input: Please pick a number between 1-365';
    let arr = [];

    let counter = 0;
    let firstWeek =counter;
    let resultsArr = [];


    if (!(num> 0 && num <=365)) {
        return msg1

    }
    else {

        for(var i = 1; i<=num; i++){

            arr.push(i);
            counter = counter +1;

            if(num>0 && num<8){
                firstWeek = i;
            }
            else{

                if(counter === 8){
                    counter =1;
                }
            }

        }
        // console.log('im the number ', num);
    }

    switch(counter){
        case 1:
            msg= 'Sunday ';
            msg2 = ', on day ';
            dayNum = num;
            dayIndex = counter;
            resultsArr.push(msg, dayNum, msg2,dayIndex);

            break;

        case 2:
            msg= 'Monday ';
            msg2 = ', on day ';
            dayNum = num;
            dayIndex = counter;
            resultsArr.push(msg, dayNum, msg2,dayIndex);
            break;

        case 3:
            msg= 'Tuesday ';
            msg2 = ', on day ';
            dayNum = num;
            dayIndex = counter;
            resultsArr.push(msg, dayNum, msg2,dayIndex);
            break;

        case 4:
            msg= 'Wednesday ';
            msg2 = ', on day ';
            dayNum = num;
            dayIndex = counter;
            resultsArr.push(msg, dayNum, msg2,dayIndex);
            break;

        case 5:
            msg= 'Thursday ';
            msg2 = ', on day ';
            dayNum = num;
            dayIndex = counter;
            resultsArr.push(msg, dayNum, msg2,dayIndex);
            break;

        case 6:
            msg= 'Friday ';
            msg2 = ', on day ';
            dayNum = num;
            dayIndex = counter;
            resultsArr.push(msg, dayNum, msg2,dayIndex);
            break;

        case 7:
            msg= 'Saturday ';
            msg2 = ' , on day ';
            dayNum = num;
            dayIndex = counter;
            resultsArr.push(msg, dayNum, msg2,dayIndex);
            break;
    }


    return resultsArr
}


const results = weekdayName2(15);


//solution #2
console.table(['It is '+ results[0]+ results[2] + results[1]]);


console.log('');
//----------------------------    3  --------------------------------
console.log('------    3  ----------');
console.log('');
//
//
//
function someDays() {

    let arr =[];
    let resultsArr =[];

    for(var i = 0; i<=7; i++){

        range = Math.ceil(1), max = Math.floor(366);
        pickDay = Math.floor(Math.random()*(max-range))+range;
        // console.log(pickDay); //returns random num

        weekdayName2(pickDay); //remember to initialize the function you're calling.
        arr.push(weekdayName2(pickDay));


        // console.log('counter: ', arr[i][3]);
        // console.log(arr);
        if(arr[i][3] == 7 || arr[i][3] == 1){
            newMsg = 'Enjoy the day off';
            arr[i].push(newMsg);

        }
        else{

            newMsg = 'Keep working';
            arr[i].push(newMsg);
        }

        resultsArr.push(arr[i][4] + ', '+ arr[i][0] + arr[i][2] + arr[i][1]);

        console.log(resultsArr[i])
    }
};

//solution #3
someDays(); //call function: consoles results from loop.





console.log('');
//----------------------------    4  --------------------------------
console.log('------    4  ----------');
console.log('');




const monthName = function(monthNum){

    let monthName = [
        'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec',
    ];

    let numOfDays =[30,31,28];

    let msg = [
        'INVALID ENTRY! Please input a number between 1',
        'An input of:  ',
        ' returns the month of: '
    ];

    let results =[];


    if(monthNum <1 || monthNum>12){

        return msg[0]
    }

    else{
        switch(monthNum){

            case 1:
            results.push( monthNum, monthName[0], msg[1], numOfDays[1]);
                return results;

            case 2:
                results.push( msg[1], monthNum, msg[2], monthName[1], numOfDays[1] );
                return results;

            case 3:
                results.push( msg[1], monthNum, msg[2], monthName[2], numOfDays[1] );
                return results;
            case 4:
                results.push( msg[1], monthNum, msg[2], monthName[3], numOfDays[0] );
                return results;

            case 5:
                results.push( msg[1], monthNum, msg[2], monthName[4], numOfDays[1] );
                return results;
            case 6:
                results.push( msg[1], monthNum, msg[2], monthName[5], numOfDays[0] );
                return results;

            case 7:
                results.push( msg[1], monthNum, msg[2], monthName[6], numOfDays[1] );
                return results;
            case 8:
                results.push( msg[1], monthNum, msg[2], monthName[7], numOfDays[1] );
                return results;

            case 9:
                results.push( msg[1], monthNum, msg[2], monthName[8], numOfDays[0] );
                return results;
            case 10:
                results.push( msg[1], monthNum, msg[2], monthName[9], numOfDays[1] );
                return results;
            case 11:
                results.push( msg[1], monthNum, msg[2], monthName[10], numOfDays[0] );
                return results;

            case 12:
                results.push( msg[1], monthNum, msg[2], monthName[11], numOfDays[1] );
                return results;
        }
    }


    return results
};


//SOLUTION #4

// console.log(resultsMonthName[2]+ ' ' + resultsMonthName[1], 'this should be june');

let monthNameResult = monthName(5); //call the function with input given for arg.

console.table([monthNameResult[0] + monthNameResult[1] + monthNameResult[2] + monthNameResult[3]]);





console.log('');
//----------------------------    5  --------------------------------
console.log('------    5  ----------');
console.log('');


function monthToDays(monthNum) {

    let msg = [
        'There are ',
        ' days in the month of ',
        'INVALID INPUT, please enter a number between 1-12'
    ];


    num = monthNum;


    if(num >12 || num<=0){
        console.log(msg[2])
    }


    switch(num){
        case 1:
            console.log('1st switch works');
            return (monthName(num)); // return previous monthName() and NOW swap monthNum arg with num from this function
        case 2:
            console.log('2nd switch works');
            return (msg[0]+ monthName(num)[4] + msg[1] +monthName(num)[1] );
        case 3:
            console.log('3rd switch works');
            return (msg[0]+ monthName(num)[4] + msg[1] +monthName(num)[3] );
        case 4:
            return (msg[0]+ monthName(num)[4] + msg[1] +monthName(num)[3] );
        case 5:
            return (msg[0]+ monthName(num)[4] + msg[1] +monthName(num)[3] );
        case 6:
            return (msg[0]+ monthName(num)[4] + msg[1] +monthName(num)[3] );
        case 7:
            return (msg[0]+ monthName(num)[4] + msg[1] +monthName(num)[3] );
        case 9:
            return (msg[0]+ monthName(num)[4] + msg[1] +monthName(num)[3] );
        case 10:
            return (msg[0]+ monthName(num)[4] + msg[1] +monthName(num)[3] );
        case 11:
            return (msg[0]+ monthName(num)[4] + msg[1] +monthName(num)[3] );
        case 12:
            return (msg[0]+ monthName(num)[4] + msg[1] +monthName(num)[3] );
    }

}

//solution  #5
console.table([monthToDays(9)], 'VERIFY');




console.log('');
//----------------------------    6  --------------------------------
console.log('------    6  ----------');
console.log('');




const dayToMonth = function(dayNum) {

    counter = 0;
    num = 0;
    resultsArr =[];
    daysRemaining =0;



    if(dayNum<1 || dayNum>365){
        console.log('Invalid entry: Please select number from 1 to 365');
    }

    else if(dayNum>=1 && dayNum<=31){            //Jan :31       sig: 31
        counter = counter +1;
    }

    else if(dayNum>=32 && dayNum<=59) {      //Feb :28      sig: 59
        counter = counter + 2;

    }
    else if(dayNum>=60 && dayNum<=90) {      //Mar : 31     sig: 90
        counter = counter +3;

    }
    else if(dayNum>=91 && dayNum<=120) {     //Apr : 30     sig: 120
        counter = counter + 4;

    }
    else if(dayNum>=121 && dayNum<=151) {    //May : 31     sig: 151
        counter = counter +5;
    }

    else if(dayNum>=152 && dayNum<=181) {    //Jun : 30     sig: 181
        counter = counter + 6;

    }
    else if(dayNum>=182 && dayNum<=212) {     //Jul : 31     sig: 212
        counter = counter +7;

    }
    else if(dayNum>=213 && dayNum<=243) {      //Aug : 31     sig: 243
        counter = counter + 8;

    }
    else if(dayNum>=244 && dayNum<=273) {      //Sept : 30    sig: 273
        counter = counter +9;
    }
    else if(dayNum>=274 && dayNum<=304) {      //Oct  : 31    sig: 304
        counter = counter +10;

    }
    else if(dayNum>=305 && dayNum<=334) {     //Nov   : 30    sig: 334
        counter = counter + 11;

    }
    else if(dayNum>=335 && dayNum<=365) {     //Dec   : 31    sig: 365
        counter = counter +12;
    }


    switch(counter){

        case 1:
            num = 1; // Jan: dayNum 1-31;
            break ;
        case 2:
            num =2; // Feb: dayNum 32-59;
            daysRemaining = -31;

            break;

        case 3:
            num =3; //Mar: dayNum 60-90;
            daysRemaining = -59;
            break;

        case 4:
            num = 4; //Apr: dayNum 91-120;
            daysRemaining = -89;
            break ;
        case 5:
            num =5; //May: dayNum 121-151;
            daysRemaining = -120;
            break;

        case 6:
            num =6; //Jun: dayNum 152-181;
            daysRemaining = -150;
            break;

        case 7:
            num = 7; //Jul: dayNum 182-212;
            daysRemaining = -181;
            break ;
        case 8:
            num =8; //Aug: dayNum 213-243;
            daysRemaining = -212;
            break;

        case 9:
            num =9; //Sep: dayNum 244-273;
            daysRemaining = -242;
            break;

        case 10:
            num = 10;//Oct: dayNum 274-304;
            daysRemaining = -273;
            break ;
        case 11:
            num =11; //Nov: dayNum 305-334;
            daysRemaining = -303;
            break;

        case 12:
            num =12; //Dec: dayNum 335-365;
            daysRemaining = -334;
            break;
    }

    // console.log('this is counter', counter);

    //solution #6i : run old function with  var num with new value from if and switch stmnts
    resultsArr.push(monthName(num)[0], dayNum, monthName(num)[2], monthName(num)[3], dayNum+daysRemaining);


    return resultsArr

};


//solution #6
let callEx6 = dayToMonth(289);
console.table([ callEx6[0]+ callEx6[1]+callEx6[2]+callEx6[3] ]);





console.log('');
//----------------------------    7  --------------------------------
console.log('------    7  ----------');
console.log('');



function fullDate(dayNum){

    // console.log(dayToMonth(num),'value for passing in dayToMonth');
    // console.log(weekdayName2(dayNum),'use for the day name'); //gives the day

    num =dayNum;

    let dateArr = dayToMonth(num);
    let dayNameArr = weekdayName2(dayNum);

    let printSolution =[];


    printSolution.push(dateArr[0], dateArr[1], dateArr[3], dateArr[4], dayNameArr[0]);


    return printSolution

}


//solution #7
let callEx7 = fullDate(49);


console.table([
    'If input = ' + callEx7[1] + ' ,the date is '
    + callEx7[4]+', ' +  callEx7[2] + ' '+callEx7[3] + ' 2018'
]);






console.log('');
//----------------------------    8  --------------------------------
console.log('------    8  ----------');
console.log('');


function fullDate2(dayNum) {

    num = dayNum;
    counter = 1;

    arr = [];
    arrB =[];

    daysInYear =365;

    aa = Math.round((num/daysInYear)*100)/100; //used to round days
    yearIncrementer = Math.floor(aa);

    daysPast = num % 365;


    for(var i =1; i<=num; i++){


        if(i % 365 == 0){
            arr.push(i);
            //leap range = 1460-1825
        }





    }

    console.log(arr);



}


fullDate2(5000);



//every 4 years (1460 days )


// 1-365        => year = 2016      //leap year:
// 366-730      => year = 2017
// 731-1095     => year = 2018
// 1096-1460    => year = 2019


// 1461-1825 (add +1 day) =>2020    //leap year:


// 1826-2190    => year = 2021
// 2191-3285    => year = 2022
// 3286-3650    => year = 2023      //leap year:
// 3651-4015    => year = 2024



// 4016-4380    => year = 2024

// 4381-4745    => year = 2024      //leap year:
// 4746-5110    => year = 2025









