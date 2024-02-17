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


const sections = document.querySelectorAll('section');
const h1_projects = document.querySelectorAll('.projects h3');
const projects_container = document.querySelectorAll('.projects .projects_container')
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
};

const sectionObserver = new IntersectionObserver(function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    if (entry.target.classList.contains('projects')) {
        console.log(entry.target);
        h1_projects.forEach((h3, index) => {
            const timeH1 = setTimeout(() => {
                h3.style.transform = 'translateX(0px)';
                clearTimeout(timeH1);
            }, index * 600)
        });
        projects_container.forEach((project, index) => {
            const timeContainer = setTimeout(() => {
                project.style.transform = 'translateX(0px)';
                clearTimeout(timeContainer);
            }, index * 600)
        });
    }
    observer.unobserve(entry.target);
}, options)
sections.forEach((section) => {
    sectionObserver.observe(section);
})

