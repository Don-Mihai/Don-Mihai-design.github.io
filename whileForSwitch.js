// while

// let quantity = 0;

// while(quantity < 0) {
//     console.log('first', quantity)
//     ++quantity
// }

// let secondQuantity = 0;

// do {

//     console.log('second', secondQuantity)
//     ++secondQuantity
    
//   } while (secondQuantity < 0);





// for

// let arr = [1, 2, 3, 4, 5, 6, 7, 13, 15]


// for (let quantity= 0; quantity < 10; ++quantity) {

//     if(arr[quantity] % 2 ) {
//         console.log(arr[quantity])
//     }
// }



let number = +prompt('Введите число:')



// if(number > 4) {
//     console.log('вы ввели цифру 1')
// }

// if(number === 4) {
//     console.log('вы ввели цифру 4')
// }

// if(number === 7) {
//     console.log('вы ввели цифру 1')
// }


switch (number) {
    case 1: 
    case 4: {
        console.log('вы ввели цифру 1 или 4')
        break;
    }

    case 7: {

        console.log('вы ввели цифру 7')
        break;
    }

    default:
        console.log('вы ввели цифру')
        break;
}

