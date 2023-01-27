

// const get = async () => {
//     const data = await fetch('https://reqres.in/api/users?per_page=12')
//         .then(async response => {
//             console.log('fetch',response);
//             console.log('преобразовали в json',await response.json());
//             return response.json();
//         })
//         .then(async response => {
//             return response.data;
//         });

//     console.log(data);
// };



// then
// const get = () => {

//     let inProgress = false;


//     inProgress = true

//     fetch('https://reqsdfres.in/api/ussdfsdfers?per_page=12')
//         .then(response => response.json())
//         .then(response => console.log(response.data))
//         .catch(errr => console.log('ошибка', errr))
//         .finally(() => inProgress = false)
// };


// async
const getEmail = async () => {

    let response;
    // метод запроса
    try {
        response = await fetch('https://reqres.in/api/users?per_page=12')
    } catch (error) {
        console.log('произошла ошибка')
    }

    // преобразование в json
    const jsonRespons = await response.json()

    return jsonRespons?.data[0].email
};



const email = document.querySelector('.info__email')

const inputEmai = document.querySelector('.form__email')

const changeEmail = async () => {
    email.innerHTML = await getEmail()
}

const changeEmailInput = async () => {
    inputEmai.value = await getEmail()
}

changeEmail()

changeEmailInput()




// запросы
// get - получить
// post - отправить, добавить
// put - заменяем одни данные на другие
// delete - удалить