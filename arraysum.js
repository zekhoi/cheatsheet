var array = [1,2,3,4];
var array2 = [4,3,2,1];

var result = array.map((res, i) => res + array2[i]);

console.log(result);
#result [5,5,5,5]
