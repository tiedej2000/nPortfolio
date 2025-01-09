const venedigElement = document.querySelector('#venedig')
const myFaceElement = document.querySelector('#myface')
const tarnungElement = document.querySelector('#tarnung')
const grafittiElement = document.querySelector('#grafitti')

const placeHolder = document.querySelector('.image-placeholder img')
const hoverText = document.querySelector('.hover-me')

venedigElement.addEventListener('mouseover', () => {
    placeHolder.src = './images/venedig.png'
    hoverText.style.display = 'none';
})

venedigElement.addEventListener('mouseout', () => {
    placeHolder.src = './images/ascii2.gif'
    hoverText.style.display = 'block';
})

// 

myFaceElement.addEventListener('mouseover', () => {
    placeHolder.src = './images/myface.png'
    hoverText.style.display = 'none';
})

myFaceElement.addEventListener('mouseout', () => {
    placeHolder.src = './images/ascii2.gif'
    hoverText.style.display = 'block';
})

// 

tarnungElement.addEventListener('mouseover', () => {
    placeHolder.src = './images/tarnung.png'
    hoverText.style.display = 'none';
})

tarnungElement.addEventListener('mouseout', () => {
    placeHolder.src = './images/ascii2.gif'
    hoverText.style.display = 'block';
})

//

grafittiElement.addEventListener('mouseover', () => {
    placeHolder.src = './images/graffiti.png'
    hoverText.style.display = 'none';
})

grafittiElement.addEventListener('mouseout', () => {
    placeHolder.src = './images/ascii2.gif'
    hoverText.style.display = 'block';
})




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



