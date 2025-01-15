const imageSet2 = [
    { element: document.querySelector('#venedig'), image: './images/venedig.png' },
    { element: document.querySelector('#myface'), image: './images/myface.png' },
    { element: document.querySelector('#tarnung'), image: './images/tarnung.png' },
    { element: document.querySelector('#grafitti'), image: './images/grafitii.png' },
    { element: document.querySelector('#untitled1'), image: './images/untitled1.png' },
    { element: document.querySelector('#späher'), image: './images/späher.png' },
    { element: document.querySelector('#gertrud'), image: './images/gertrud.png' },
    { element: document.querySelector('#untitled2'), image: './images/untitled2.png' },
    { element: document.querySelector('#nostalgisch'), image: './images/nostalgisch.png' },
    { element: document.querySelector('#recently'), image: './images/recently.png' },
    { element: document.querySelector('#portrait'), image: './images/portrait.png' },
    { element: document.querySelector('#schattengestalt'), image: './images/schattengestalt.png' },
    { element: document.querySelector('#werkschau'), image: './images/werkschau.png' },
    { element: document.querySelector('#strasbourg'), image: './images/strasbourg.png' }
];

const placeHolder = document.querySelector('.image-placeholder img');
const hoverText = document.querySelector('.hover-me');

imageSet2.forEach(({ element, image }) => {
    element.addEventListener('mouseover', () => {
        placeHolder.src = image;
        hoverText.style.display = 'none';
    });

    element.addEventListener('mouseout', () => {
        placeHolder.src = './images/ascii3.gif';
        hoverText.style.display = 'block';
    });
});

// hover me

const hoverMe = document.querySelector('.hover-me');
const radioPlaceholder = document.querySelector('.radio-img-placeholder');
const radioPlaceholderImg = document.querySelector('.radio-img-placeholder img');

let imageSet = [
    './images/1.png',
    './images/2.png',
    './images/3.png',
    './images/4.png',
    './images/5.png',
    './images/6.png',
    './images/7.png',
    './images/8.png',
    './images/9.png',
    './images/10.png',
];

let isRotating = false;

hoverMe.addEventListener('mouseover', () => {
    radioPlaceholder.style.display = 'block';
    startRotation();
});

hoverMe.addEventListener('mouseout', () => {
    radioPlaceholder.style.display = 'none';
    stopRotation();
});

function startRotation() {
    if (!isRotating) {
        isRotating = true;
        let currentIndex = 0;

        function changeImage() {
            if (currentIndex < imageSet.length) {
                radioPlaceholderImg.src = imageSet[currentIndex];
                currentIndex++;
            } else {
                currentIndex = 0;
                radioPlaceholderImg.src = imageSet[currentIndex];
                currentIndex++;
            }

            if (isRotating) {
                setTimeout(changeImage, 100);
            }
        }

        changeImage();
    }
}

function stopRotation() {
    isRotating = false;
}


//  scramble effect

document.addEventListener("DOMContentLoaded", () => {
    const description = document.getElementById("description-text");
    const text = description.textContent;
    const scrambleDuration = 1500;
    const scrambleInterval = 75;

    let scrambleTimeout;

    const shuffleWord = (word) => {
        const letters = word.split("");
        for (let i = letters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [letters[i], letters[j]] = [letters[j], letters[i]];
        }
        return letters.join("");
    };

    const scrambleText = (input) => {
        return input
            .split(/\b/)
            .map((segment) => {
                if (/^\w+$/.test(segment)) {
                    return shuffleWord(segment);
                }
                return segment;
            })
            .join("");
    };

    const applyScramble = () => {
        description.textContent = scrambleText(text);
    };

    scrambleTimeout = setInterval(applyScramble, scrambleInterval);

    setTimeout(() => {
        clearInterval(scrambleTimeout);
        description.textContent = text;
    }, scrambleDuration);
});

// dark mode

const darkModeButton = document.querySelector('#toggle-dark-mode')
const body = document.body
const header = document.querySelector('.name-tag img')

let isDarkMode = false

darkModeButton.addEventListener('click',() =>{
    if(!isDarkMode){
        body.classList.toggle('dark-mode')
        header.src = './images/niki_header-dark.png'
        isDarkMode = true
    } else{
        body.classList.toggle('dark-mode')
        header.src = './images/niki_header.png'
        isDarkMode = false
    }
    
})

// socials blur

const socialsButton = document.querySelector('.socials-nav')
const socialsElement = document.querySelector('#socials')
const homeElement = document.querySelector('.name-nav')

const descriptionElement = document.querySelector('.description')
const imageContentElement = document.querySelector('.image-content')
const rightContainerElement = document.querySelector('.right-container')


socialsButton.addEventListener('click', () =>{
    socialsElement.classList.toggle('active')
    descriptionElement.classList.toggle('blurred')
    imageContentElement.classList.toggle('blurred')
    rightContainerElement.classList.toggle('blurred')
})

homeElement.addEventListener('click', () =>{
    socialsElement.classList.remove('active')
    descriptionElement.classList.remove('blurred')
    imageContentElement.classList.remove('blurred')
    rightContainerElement.classList.remove('blurred')
})



