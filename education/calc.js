"use strict";

// можно было бы конечно убрать дублирование когда через функциональный подход,
// но в рамках задачи этого не требовалось :)

// реализованы проверки на пустые строки, число, знак, нажатие на cancel
// цикл не позволит закончить взаимодействие с пользователем пока он не введет всё правильно
let a;

while (true) {
  a = prompt("Введите первое число:", "");
  if (a === null || a === "") {
    alert("Вы не ввели ничего! Разве я много прошу?!");
  } else if (!isNaN(a)) {
    break;
  }
  if (isNaN(a)) {
    alert("Вы конечно ввели что-то, но это явно не число, введите число!");
  }
}
console.log(a);

let operator;
while (true) {
  operator = prompt("Введите знак(+, -, /, *):");
  if (a === null || a === "") {
    alert("Вы не ввели ничего! Разве я много прошу?!");
  } else if (
    operator === "+" ||
    operator === "-" ||
    operator === "*" ||
    operator === "/"
  ) {
    break;
  } else {
    alert("Допустимы только указанные знаки! (+, -, /, *)");
  }
}
console.log(operator);

let b;

while (true) {
  b = prompt("Введите первое число:", "");
  if (b === null || b === "") {
    alert("Вы не ввели ничего! Разве я много прошу?!");
  } else if (!isNaN(b)) {
    break;
  }
  if (isNaN(b)) {
    alert("Вы конечно ввели что-то, но это явно не число, введите число!");
  }
}
console.log(b);

switch (operator) {
  case "+": {
    console.log("result: ", +a + +b);
    break;
  }
  case "-": {
    console.log("result: ", +a - +b);
    break;
  }
  case "*": {
    console.log("result: ", +a * +b);
    break;
  }
  case "/": {
    console.log("result: ", +a / +b);
    break;
  }
  //default не требуется из-за ранней проверки на необходимые знаки
}

