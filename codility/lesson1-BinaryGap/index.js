//binary gap

function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    let locFor1=null;
    let i=0;
    let max = 0;
    let remainder=N;
    while(remainder>1){
        newN = remainder;
        remainder = Math.floor(newN/2);
        if(newN%2!=0){      
           if(locFor1!=null) {
                let diff=i-locFor1-1;
                if (diff>max){
                    max=diff
                }
            };
            locFor1=i
        }
        i++;        
    }
    if (locFor1!=null){
        let diff=i-locFor1-1;
        if (diff>max){
            max=diff
        }
    }    
    return max;
}

module.exports = solution;