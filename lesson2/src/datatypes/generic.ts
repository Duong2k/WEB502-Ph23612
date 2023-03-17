
// function showStringData(a: string): string {
//     return a
// }

// function showNumberData(b: number): number {
//     return b
// }
// // Generic
// function showData<T>(a: T): T {
//     return a
// }

// showData<number>(10)

const strArr = ["Hoa", "Duy", "Vu Anh"]
// const result = numArr.map(item => {
//     return item * item
// })

// console.log(result);


// function we17305_map<T>(arr: T[], callback: (item: T, index: number) => T): T[] {
//     let temp = <T[]>[]
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i], i)
//         temp.push(newItem)
//     }
//     return temp
// }

// const result = we17305_map(strArr, (item, index) => {
//     return item + "-we17305"
// })

// console.log(result, "we17305_map");

const numberArr: number[] = [5, 4, 8, 14, 29, 11, 6, 9, 40]
function sort<T>(arr: T[], compareFn: (a: T, b: T) => number): T[] {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (compareFn(arr[i], arr[j]) > 0) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
const result = sort(numberArr, (a, b) => {
    return b - a;
})
console.log(result);