// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let res = [];
    let max =0;
    let lastIncrease=0;
    for (let i=0; i<N; i++){
        res.push(0);
    }
    for (a of A){
       if(a===N+1) { 
            lastIncrease=max;
       }else{           
           res[a-1] =Math.max(res[a-1],lastIncrease)+1; 
           if(res[a-1]>max){max=res[a-1];}
       }
    }
    res.forEach((r,i)=>{
        res[i]=Math.max(lastIncrease, r);
    }); 
    return res;
}