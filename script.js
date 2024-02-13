document.addEventListener('DOMContentLoaded', function () {
    const educationDiv = document.querySelectorAll('.education div[aria-label]');
    educationDiv.forEach((ele) => {
        const new_element = document.createElement('div_ele');
        const widthValue = ele.getAttribute('aria-label');
        new_element.style.width = `calc(${4 - widthValue} * 25%)`;
        new_element.classList.add('before_style');
        ele.insertAdjacentElement('afterbegin', new_element)
    })
});

const icone_header = document.querySelector('.header span');
const navigation = document.querySelector('.header .navigation');
const lis = document.querySelectorAll('.header .navigation li');
if (window.innerWidth < 992) {
    icone_header.addEventListener('click', function () {
        console.log(12);
        navigation.classList.toggle('initial');
    })
    lis.forEach((li) => {
        li.addEventListener('click', function () {
            navigation.classList.toggle('initial');
        })
    })
}
else {
    navigation.classList.remove('initial');
}
