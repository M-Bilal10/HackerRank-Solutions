// Problem: A Very Big Sum
// Platform: HackerRank

function aVeryBigSum(ar) {
    let sum = 0n;
    for(let i = 0; i<ar.length; i++){
        sum += BigInt(ar[i]);
    }
    return sum;
}
