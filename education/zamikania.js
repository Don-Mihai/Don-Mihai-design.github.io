function person() {
    let name = 'Peter';

    return function displayName() {
        console.log(name);
    };
}

let peter = person(); // текст функции записывается в переменную peter
peter(); // 'Peter' эта переменная является обычной функцией, поэтому её можно вызвать

// 1) внутреняя функция не вызывается, а просто возвращается текст функции
// 2) текст функции записывается в переменную
// 3) эта переменная является обычной функцией, поэтому её можно вызвать
// 4) у внутреней функции есть доступ к внешней переменной даже не смотря на то внешняя функция завершила свою работу

// -------------------------------------------

function getCounter() {
    let counter = 0;

    return function () {
        return counter++;
    };
}



let count = getCounter();

console.log(count()); // 0
console.log(count()); // 1
console.log(count()); // 2





// let a = 0

// let increment = () => {
//     return a = a + 1
// }



