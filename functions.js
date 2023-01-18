// //  Function Declaration

// sayHi()

// function sayHi() {
//     alert( "Привет" );
// }

// // Function Expression

// let sayHi = function() {
//     alert( "Привет" );
// };

// sayHi()

// // стрелочная функция
// let sayHi = (anotherFunc, text) => {
//     anotherFunc()
//     alert( text );
// }

// // const walking = () => {
// //     console.log('я хожу')
// // }

// const running = () => {
//     console.log('я бегу')
// }

// const wrapRunning = running

// const newFunc = wrapRunning

// // sayHi(newFunc, 'Здарова!')

// let numbers = prompt('Введите значения');

// // суммирует любое количество значений
// const sum = (...numbers) => {
//     // ['5, 5']
//     let result = 0;

//     if (typeof numbers[0] === 'string') {
//         let arrOfStringNumbers;

//         if (numbers[0].includes(',')) {
//             arrOfStringNumbers = numbers[0].split(', ');
//         } else {
//             arrOfStringNumbers = numbers[0].split(' ');
//         }

//         console.log('arrOfStringNumbers', arrOfStringNumbers);

//         const arrOfNumbers = arrOfStringNumbers.map(item => Number(item));

//         console.log('arrOfNumbers', arrOfNumbers);

//         arrOfNumbers.forEach(item => (result = result + item));
//     } else {
//         numbers.forEach(item => (result = result + item));
//     }

//     return result;
// };

// console.log(sum(5, 5));

// if(arr.length === 0) {
    
// }


// const SPEED_lIGHT = 30000