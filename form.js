let button = document.querySelector('.form__button')


function isEmailValid(value) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return EMAIL_REGEXP.test(value);
}

button.addEventListener('click', (event) => {
    event.preventDefault()

    let name = document.querySelector('.form__name').value
    let email = document.querySelector('.form__email').value
    let message = document.querySelector('.form__message').value


    if (name.length && isEmailValid(email)) {
        

    } else {
        let div = document.createElement('div');
        div.className = 'alert';
        div.innerHTML = '<strong>Всем привет!</strong> Вы прочитали важное сообщение.';

        document.body.append(div);

        let time = setTimeout(()=> {
            let modal = document.querySelector('.alert')
            modal.remove()
        }, 5000)

        div.addEventListener('mouseover', () => {
            clearTimeout(time)
        })

        div.addEventListener('mouseout', () => {
            time = setTimeout(()=> {
                let modal = document.querySelector('.alert')
                modal.remove()
            }, 5000)
        })

    }

})