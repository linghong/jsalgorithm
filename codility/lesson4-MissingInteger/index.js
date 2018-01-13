// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//Method1
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

// Method2
/*function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let intMap = {};
    for (a of A){
       if(a>0) {
            intMap[a] = intMap[a]+1||1;
        }
    }
    let i = 1;
    let len = Object.keys(intMap).length;
    while (i<len+1){
        if(!intMap[i.toString()]) {
            return Math.max(i);
        }
        i++;
    }
    return Math.max(i, 1);
}*/