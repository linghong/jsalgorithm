// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let AA =new Set();
   for(let i=0; i<A.length; i++){
     if(AA.has(A[i])) return 0;
     AA.add(A[i]);
   }
   for( let j=1; j<A.length+1; j++){
       if(!AA.has(j)) return 0;
   }
   return 1;
}