// Problem: Plus Minus
// Platform: HackerRank

function plusMinus(arr) {
    let count = 0;
let count1 = 0;
let count2 = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i]>0){
        count++;
    }
    if(arr[i]<0){
        count1++;
    }
     if(arr[i]===0){
        count2++;
    }
}
let ratiocount = count/arr.length;
let ratiocount1 = count1/arr.length;
let ratiocount2 = count2/arr.length;
console.log(ratiocount.toFixed(6));
console.log(ratiocount1.toFixed(6));
console.log(ratiocount2.toFixed(6));
}
