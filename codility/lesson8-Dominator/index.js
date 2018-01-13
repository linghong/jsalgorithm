// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let aObj = {};
    A.forEach((d,i)=>{
        if(!aObj.hasOwnProperty(A[i])){
            aObj[A[i]] = [];
        }
        aObj[A[i]].push(i);
    });

    for (let prop in aObj){
        if(aObj[prop].length>A.length/2){
            return aObj[prop][0];
        }
    }
    return -1;
}