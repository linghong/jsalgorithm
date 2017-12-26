// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 6.4.0)
    let downStream = [];
    let count =0;
    for (let i = 0; i<A.length; i++){
        if(B[i]==0) {
            while (downStream.length!=0 && downStream[downStream.length-1]<A[i]){          
                downStream.pop();
            }
            if(downStream.length==0){ count++;}
        } else{
            downStream.push(A[i]);
        }       
    }
   return count+ downStream.length; 
}