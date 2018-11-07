"use strict";

function createMount(params) {
    var water=0;
    let max = Math.max.apply(null, params);
    let maxIndex = params.indexOf(max);
    let left = params.slice(0,maxIndex);
    let right = params.slice(maxIndex+1,params.length);
    leftSearch(left)
    rightSeatch(right);
    return water;
    
    
    function rightSeatch(paramArray) {

        let max = Math.max.apply(null, paramArray);
        let maxIndex = paramArray.indexOf(max);
        for(let i=maxIndex-1; i>=0; i--){
           water+=max- paramArray[i];
        }
        if(maxIndex<paramArray.length-1){
            let rightOver = paramArray.slice(maxIndex+1,paramArray.length);
            rightSeatch(rightOver);
        }
    }


    function leftSearch(paramArray) {
        let max = Math.max.apply(null, paramArray);
        let maxIndex = paramArray.indexOf(max);
        for(let i=maxIndex+1; i<paramArray.length; i++){
            water+=max- paramArray[i];
        }
        if(maxIndex>1){
            let leftover = paramArray.slice(0,maxIndex);
            leftSearch(leftover);
        }    
    }   
}
createMount([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]);