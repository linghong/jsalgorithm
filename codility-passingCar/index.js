// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let count = 0;
    let temp =0;
    for(let i=A.length-1; i>=0; i--){
        if(A[i]==1){
            temp++;
        }else{
            count+=temp;
        }
    }
    return count<=1000000000?count:-1;
}