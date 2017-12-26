// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let intSet =new Set();
    A.forEach(a=>{
        if(a>0 && !intSet.has(a)){intSet.add(a);}
    });
    let i=1;
    while(intSet.size!==0){
        if(!intSet.has(i)) return i;
        intSet.delete(i);
        i++;
    }
    return i;
}