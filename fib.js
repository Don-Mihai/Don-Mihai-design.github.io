// function fib(n) {
//     if (n === 1 || n === 2) return 1;
//     else return fib(n - 2) + fib(n - 1);
//   }
//   const fibbonaci = +prompt("Введите порядковый номер числа Фибоначчи");
  
//   alert(fib(fibbonaci));
//   console.log(fib(fibbonaci));



// function countDown(number) {

//   // вывод в консоль
//   console.log(number);

//   // уменьшаем значение на один
//   const newNumber = number - 1;

//   // условие выхода
//   if (newNumber > 0) {
//       countDown(newNumber);
//   }
// }




// function findFibonacci(n)
// {
//     let fib0 = 0;
//     let fib1 = 1;

//     let fib;

//     let arr = []

//     for(let i = 2; i <= n; i++)
//     {
//         fib = fib0 + fib1;

//         fib0 = fib1;
//         fib1 = fib;

//         arr.push(fib)
//     }

//     return arr;
// }



function findFibonacci(n)
{
    if (n == 0)
        return 0;

    if (n == 1)
        return 1;

    return findFibonacci(n - 1) + findFibonacci(n - 2);
}

console.log(findFibonacci(3))

