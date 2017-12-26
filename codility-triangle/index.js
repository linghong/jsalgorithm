// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
       A.sort((a,b)=>{return a-b});
        if(A.length<3) return 0;
        for(let i=0; i<A.length; i++){
            if(A[i]<0) continue;
            if(A[i]+A[i+1]>A[i+2]) return 1;
        }
        return 0;
}

