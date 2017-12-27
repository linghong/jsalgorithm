// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    //If a slice is a minium average slice and has more than 3 elementd, it can be divide into several 2-elements slices and/or 3-elements slices
    //All of those sub-slices must have same average, i.e. the minium average, otherwise, the original slice won't be the minium average slice
    //Thus at least either a 2-elements slice or a 3-elements slice is the minimal average slice
    //3-slices
    let miniAvg=(A[0]+A[1])/2;
    let index =0;
    let len = A.length;
    for(let i=0; i<len-2; i++){
        let avg3=(A[i]+A[i+1] +A[i+2])/3;
        if(avg3<miniAvg){
            miniAvg =avg3;
            index=i;
        }
        let avg2=(A[i+1]+A[i+2])/2;
        if(avg2<miniAvg){
            miniAvg=avg2;
            index=i+1;
        }
    }
    return index;
}