// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let leavesPos =new Set();
    for(let i=1; i<X+1; i++){
        leavesPos.add(i);          
    }
 
    let j=0;
    while(leavesPos.size!==0 && j<A.length){            
        if(leavesPos.has(A[j])){leavesPos.delete(A[j]);}
        j++;
    }
    if(leavesPos.size!==0) {return -1;}
    return j-1;
}