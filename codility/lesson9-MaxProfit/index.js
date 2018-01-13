// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    if (A.length=0) return 0;
    let start = A[0];
    let end = null;
    let startIndex;
    let nextStart= null;
    for(let j=1; j<A.length; j++){
        if(A[j]<start){
            start=A[j];
        }else{
            end=A[j];
            startIndex = j;
            break;
        }
    }
    for(let i=startIndex; i<A.length; i++){
        if(nextStart==null){
            if(A[i]>=end){
                end = A[i];
            } else if(A[i]<start){
                nextStart = A[i];
            } else{
                continue;
            }
        }else {
            if(A[i]<nextStart){
                nextStart = A[i];
            } else if(A[i]-nextStart>end-start){
                end = A[i];
                start = nextStart;
                nextStart = null;
            } else {
                continue;
            }
        }
    }
    return end-start<0?0:end-start;
}