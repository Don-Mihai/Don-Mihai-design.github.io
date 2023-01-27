const links = document.querySelectorAll('a[href^="#"]');


links.forEach((link) => {

    link.addEventListener('click', (event) => {
        console.log('кликнули на ссылку')

        event.preventDefault();

        const id = link.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })
})


window.addEventListener('scroll', () => {
    const HEADER_HEIGHT = 74;
    let scrollDistance = window.scrollY + HEADER_HEIGHT; // растояние от верха страницы до места скролла

    document.querySelectorAll('section').forEach((section, currentSection) => {

        // здесь мы смотрим в какой мы секции
        if (section.offsetTop <= scrollDistance) {

            // находим все ссылки меню и проходимся по ним
            document.querySelectorAll('.navigation__item').forEach(link => {
                // сначала удаляем все старые классы (active)
                link.classList.remove('navigation__item--active');
            });

            document.querySelectorAll('.navigation__item')[currentSection].classList.add('navigation__item--active');
        }
    });
});
