// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let circles = [];
    A.forEach((a,i)=>{
        circles.push({ left:i-A[i], right:i+A[i]});
    });  
    circles.sort((a,b)=>{return a.left-b.left});
    let count=0;
    for (let i =0; i< circles.length-1; i++){
        let j= i+1;
        while(j<circles.length&&circles[j].left<=circles[i].right){
            count++;
            j++;
        }
    }
    return count>10000000?-1:count;
}