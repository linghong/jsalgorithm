// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let sum =0;
    for(a of A){
        sum+=a;
    }
    // write your code in JavaScript (Node.js 6.4.0)       
    let min = Math.abs(sum-A[0]-A[0]);//use the first result as min
    let first =0;
    let last =sum;
    for (let i=0; i<A.length-1; i++){
        first =A[i]+first;
        last=last-A[i];
        const diff =Math.abs(first-last);
        if(diff<min){
            min=diff;
        }
    }
    return min;
}