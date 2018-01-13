// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)\
    if(S.length==0){ return 1;}
    let left = 0;
    for (let i = 0; i<S.length; i++){
        if(S.charAt(i) == "("){
            left++;
        } else if(S.charAt(i) == ")" && left>0){
            left--;
        } else { 
            return 0;
        }
    }
    if (left!==0) {return 0;}
    return 1;
}