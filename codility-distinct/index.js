// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let distinct = new Set();
    for (i in A){
        if(!distinct.has(A[i])){
            distinct.add(A[i]);
        }
    }
    return distinct.size;
}