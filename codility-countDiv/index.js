// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    let i=A;
    let num =0;
    while(i<=B){
        if(i%K==0){
        num = Math.floor((B-i)/K)+1;
        break;
        }
        i++;
    }
    return num;
}