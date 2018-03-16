console.log('');
//----------------------------    1  --------------------------------
console.log('------    1  ----------');
console.log('');
//
//

function minToFront() {

    arr = [4,2,9,3,1,5];
    console.log(arr);


    temp2 =null;
    oldLowest = null;
    newLowest = null;
    swapMarker = 0;



    for(var i =0; i<arr.length; i++){

        if(arr[i] < arr[i-1]) {

            temp = arr[i-1];
            arr[i-1] = arr[i];
            arr[i] = temp;


            console.log(arr)
        }

        if(arr[i]<arr[0]){
            arr[0] =arr[i]
        }
        // else{
        //     if(arr[i] > arr[i-1]) {
        //         temp = arr[i];
        //         arr[i] = temp;
        //     }
        //
        // }

    }


    return arr

}


console.log(minToFront());