// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    //if the left half and right half has a leader of same value, this leader must also be the leader for the whole array
    //Thus first find the leader for the whole array
    let aObj = {};
    A.forEach((d,i) => {
        if(!aObj.hasOwnProperty(A[i])){
            aObj[A[i]] = 1;
        } else {
            aObj[A[i]]++;
        }
    });
    
    let leaderVal;
    for (let prop in aObj){
        if(aObj[prop] > A.length/2){
           leaderVal = prop;
           break;
        }
    }

    //Now get the count
    let leaderSofar = 0;
    let count =0;
    A.forEach((d,i)=>{ 
        if(d==leaderVal){
           leaderSofar++;
        }
        if(leaderSofar>(i+1)/2 && (aObj[leaderVal]-leaderSofar)>(A.length-1-i)/2) {
            count++;
        }
    });
    return count;
}