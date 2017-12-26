// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)
    if (S.length=0) return 1;
    let completeCol = S.split("");
    let rightCol =[];
    let pair={"{": "}", "[": "]", "(": ")"}
    for(let i=completeCol.length-1; i>=0; i--){
        let curr =completeCol.pop();
        if(curr=="]"|curr=="}"|curr==")"){
            rightCol.push(curr);
        } else {
            let right=rightCol.pop();
            if (right!=pair[curr]) return 0;
        }        
    }
    return rightCol.length!=0?0:1;
}
