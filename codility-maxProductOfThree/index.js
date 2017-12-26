// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)   
    let len =A.length;
    if(len==3) return A[0]*A[1]*A[2];
    let sortedA = A.sort((a,b)=>{return a-b});
    let zeroThree=A[len-1]*A[len-2]*A[len-3];
    let twoOne=A[0]*A[1]*A[len-1];
    //if A has more than two negative numbers, the result will always be positive;
    if(A[0]<0 && A[1]<0) {
        return Math.max(twoOne, zeroThree);
    } else {
    //if A has no more than one negative numbers, the result will always be the product of the largest three;    
        return zeroThree
    }
}