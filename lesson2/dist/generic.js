function showStringData(a) {
    return a;
}
function showNumberData(b) {
    return b;
}
//Generic
function showData(a) {
    return a;
}
showData(10);
//const numArr = [1,2,3,5,8,13] //Fibonaci
var strArr = ["Hoa", "duy", "Vu ANh"];
// //const result = numArr.map(item=>{
//     return item * item
// })
// console.log(result);
// function we17305_map<T>(arr: T[], callback: (item: T, index: number) => T): T[] {
//     let temp = []
//     for (let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i], i)
//         temp.push(newItem)
//     }
//     return temp
// }
// const result = we17305_map(strArr, (item, index) => {
//     return item + "-we17305"
// })
// console.log(result, "we17305_map");
var numberArr = [5, 4, 8, 14, 29, 11, 6, 9, 40];
function sort(arr, compareFn) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (compareFn(arr[i], arr[j]) > 0) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var result = sort(numberArr, function (a, b) {
    return b - a;
});
console.log(result);
