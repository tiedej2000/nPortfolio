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
