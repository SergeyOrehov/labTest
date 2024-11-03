const bodyWrapper = document.querySelector('html')
//mobile header
const burgerBtnWrap = document.querySelector('.burger-btn-wrap')
const burgerBtn = document.querySelector('.burger-btn')
const mobileHeader = document.querySelector('.header-mobile')
const logo = document.querySelector('.logo')

burgerBtnWrap?.addEventListener('click', () => {;
    mobileHeader.classList.toggle('active')
    bodyWrapper.classList.toggle('active')
    document.body.classList.toggle('nav-open');
    logo.classList.toggle('active');
})

document.addEventListener('DOMContentLoaded', function () {
    // Находим все ссылки в меню
    const links = document.querySelectorAll('nav ul li a');

    // Обрабатываем клик по каждой ссылке
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            mobileHeader.classList.remove('active')
            bodyWrapper.classList.remove('active')
            document.body.classList.remove('nav-open');
            logo.classList.remove('active');
            e.preventDefault();

            // Получаем id секции, к которой нужно прокрутить
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Вычисляем положение секции относительно верха документа
                const offsetTop = targetSection.offsetTop;
                if (link.closest('.header-mobile')) {
                    setTimeout(() => {
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth' // Плавная анимация
                        });
                    }, 300)
                } else {
                    // Плавно прокручиваем страницу к секции
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth' // Плавная анимация
                    });
                }
            }
        });
    });
});

const allInputs = document.querySelectorAll('.input-container input')

allInputs.forEach(item => {
    item.addEventListener('input', function () {
        if (item.value) {
            item.classList.add('filled');
        } else {
            item.classList.remove('filled');
        }
    });
})

//close modal window after clicking outside modal block
document.querySelectorAll('.popupThanks').forEach(function (e) {
    e.onclick = function (element) {
        if (element.target.classList.contains('popupThanks')) {
            element.target.classList.remove("open");
            document.body.style.overflow = "";
        }
    }
})
