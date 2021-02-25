//This is the base model

var array = [1,2,3,4];
var array2 = [4,3,2,1];

var result = array.map((res, i) => res + array2[i]);

console.log(result);
//result [5,5,5,5]

//Update dynamic calculator
const matcal = (matrix) => {
    let him = [];
    for (j=0;j<matrix.length;j++){
        awal = matrix[j][0]
        for (i=0;i<matrix[0].length-1; i++){
            let n = i+1
            awal = awal.map((res, i) => res + matrix[j][n][i]);
        }
        him.push(awal)
    }
    console.log(him)
    return him
}


let base = [
    [[1,1,1],[3,4,5],[6,7,8]],
    [[1/5,1/4,1/3],[1,1,1],[4,5,6]],
    [[1/8,1/7,1/6],[1/6,1/5,1/4],[1,1,1]]
]

matcal(base)
//result

[ [ 10, 12, 14 ],
  [ 5.2, 6.25, 7.333333333333333 ],
  [ 1.2916666666666665, 1.342857142857143, 1.4166666666666665 ] ]
