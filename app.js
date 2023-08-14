const planetsSource = './planets-folder/planets.json';

function pageLoadAnimate() {
    const planetImage = document.querySelectorAll('.planet-image');
    planetImage.forEach((items) => {
        items.classList.add('planet-grow');
    })
}

window.addEventListener('DOMContentLoaded', async () => {

    try {
        const response = await fetch(planetsSource);
        const data = await response.json();
        display(data);

    } catch (error) {
        console.log(`Unexpected error`);
    }

    pageLoadAnimate();
})

const display = (items) => {
    const displayItems = items.map((item) => {
        const {name, quote, imgSrc, planetColor, finalMessage} = item;
        return `<div class="planet planet-1">
        <img src=${imgSrc} alt="" class="planet-image">
        <h3 class="planet-name ${planetColor}">${name}</h3>
        <p class="planet-quote ${planetColor}">"${quote}"</p>
        <div class="nav-buttons-align">
    <div class="navigation-buttons">
        <button class="prev-btn"><i class="fa-solid fa-arrow-left ${planetColor}"></i></i></button>
        <button class="next-btn"><i class="fa-solid fa-arrow-right ${planetColor}"></i></button>
    </div>
    </div>
    </div>`
    }).join('');
    const planetsContainer = document.querySelector('.the-planets');
    planetsContainer.innerHTML = displayItems;

// Carousel functionality
const planetContainer = document.querySelectorAll('.planet');
const nextBtn = document.querySelectorAll   ('.next-btn');
const prevBtn = document.querySelectorAll('.prev-btn');

planetContainer.forEach(function(planet, index) {
    planet.style.left = `${index * 100}%`
})

let counter = 0;


nextBtn.forEach(function(btn) {
    btn.addEventListener('click', () => {
        counter++;
        carousel();
        imageAnimate();
    })
})

prevBtn.forEach(function(btn) {
    btn.addEventListener('click', () => {
        counter--;
        carousel();
        imageAnimate2();
    })
})


function carousel() {

    if(counter < 0) {
        counter = planetContainer.length - 1;
    }

    if (counter > planetContainer.length - 1) {
        counter = 0;
    }

    planetContainer.forEach(function(planet) {
        planet.style.transform = `translateX(-${counter * 100}%)`
    }) 
}}

function imageAnimate() {
    const planetImage = document.querySelectorAll('.planet-image');
    planetImage.forEach((items) => {
            if(!items.classList.contains('planet-animate')) {
                items.classList.remove('planet-grow');
                items.classList.add('planet-animate');
            }

            setTimeout(() => {
                planetImage.forEach((items) => {
                    items.classList.remove('planet-animate');
                    items.classList.add('planet-grow');
                })
            }, 1000);
    })
}

function imageAnimate2() {
    const planetImage = document.querySelectorAll('.planet-image');
    planetImage.forEach((items) => {
            if(!items.classList.contains('planet-animate-reverse')) {
                items.classList.remove('planet-grow');
                items.classList.add('planet-animate-reverse');
            }

            setTimeout(() => {
                planetImage.forEach((items) => {
                    items.classList.remove('planet-animate-reverse');
                    items.classList.add('planet-grow');
                })
            }, 1000);
    })
}



