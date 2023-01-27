const arr = [1, 2, 3, 4, 5, 6, 7, 8,]
const chaos = [{name: '1'}, {name: '2'}, {name: '3'}, {name: '4'}]

const str = 'asdfasdffasdfasdf'



// фильтрация, метод не мутирует старый массив а создаёт новый.
// const filteredArr = arr.filter((item) => {
//     if(!(item%2)) {
//         return true
//     } else {
//         return false
//     }
// })

// console.log(arr)
// console.log(filteredArr)


// преобразование массива, метод не мутирует старый.
// const changedArr = arr.map((item, index) => {
//     if (!(item % 2)) {
//         return `Это цифра четная: ${item}`;
//     } else {
//         return `Это цифра нечетная: ${item}`;
//     }
// });

// console.log(changedArr)


// ничего не мутирует, ничего не создает, а просто интерируемся по массиву
// arr.forEach((item)=> {
//     console.log(item + 2)
// })

// console.log(arr)

// const result  = arr.reduce((prev, currrent) => {
//     return item + acum
// }, '')

// console.log(result)




// const result = arr.concat([9, 10])

// console.log(result)




// модифицирует (как и push)
// arr.pop()

// console.log(arr)




// console.log(arr.slice(0, 5))
// console.log(arr.splice(0, 3))





// console.log(arr.reverse())


// console.log(arr.flat())



// метод сортировки
// console.log(chaos.sort((first, second)=> {
//     if (first.name > second.name) {
//         return 1;
//       }
//       if (first.name < second.name) {
//         return -1;
//       }
//       // a должно быть равным b
//       return 0;
// }))