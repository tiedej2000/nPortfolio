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

const imageContentElement = document.querySelector('.image-content')
const rightContainerElement = document.querySelector('.right-container')


socialsButton.addEventListener('click', () =>{
    socialsElement.classList.toggle('active')
    imageContentElement.classList.toggle('blurred')
    rightContainerElement.classList.toggle('blurred')
})

homeElement.addEventListener('click', () =>{
    socialsElement.classList.remove('active')
    imageContentElement.classList.remove('blurred')
    rightContainerElement.classList.remove('blurred')
})


// info

const expandButton = document.querySelector('.expand-button')
const descriptionInfo = document.querySelector('.description')
isExpanded = false

expandButton.addEventListener('click', () => {
    if(!isExpanded){
        descriptionInfo.classList.toggle('active')
        imageContentElement.classList.toggle('blurred')
        rightContainerElement.classList.toggle('blurred')
        expandButton.textContent = 'x'
        isExpanded = true
    } else{
        expandButton.textContent = '+'
        descriptionInfo.classList.toggle('active')
        imageContentElement.classList.toggle('blurred')
        rightContainerElement.classList.toggle('blurred')
        isExpanded = false
    }   
})

// image content venedig
const imageSets = {
    venedig: [
        { id: 1, image: './images/venedig1.png' },
        { id: 2, image: './images/venedig2.png' },
        { id: 3, image: './images/venedig3.png' },
        { id: 4, image: './images/venedig4.png' },
        { id: 5, image: './images/venedig5.png' },
        { id: 6, image: './images/venedig6.png' },
        { id: 7, image: './images/venedig7.png' }
    ],
    mfitrs: [
        { id: 1, image: './images/mfitrs1.png' },
        { id: 2, image: './images/mfitrs2.png' },
        { id: 3, image: './images/mfitrs3.png' },
        { id: 4, image: './images/mfitrs4.png' },
        { id: 5, image: './images/mfitrs5.png' },
        { id: 6, image: './images/mfitrs6.png' },
        { id: 7, image: './images/mfitrs7.png' },
        { id: 8, image: './images/mfitrs8.png' },
        { id: 9, image: './images/mfitrs9.png' },
        { id: 10, image: './images/mfitrs10.png' }
    ],
    tarnung:[
        { id: 1, image: './images/tarnung1.png' },
        { id: 2, image: './images/tarnung2.png' }
    ],
};


// cycle trough

const pageType = document.body.getAttribute('data_page');
const imageSet = imageSets[pageType];

console.log(pageType)

if (!imageSet) {
    console.error("Invalid page type or no matching image set found!");
} else {
    // Initialize variables
    const leftButton = document.querySelector('.button-left');
    const rightButton = document.querySelector('.button-right');
    const imagePlaceholder = document.querySelector('.image-content img');
    const counter = document.querySelector('.counter');
    let currentIndex = 0;

    function updateImage() {
        const currentImage = imageSet[currentIndex];
        imagePlaceholder.src = currentImage.image;
        counter.textContent = `${currentImage.id}/${imageSet.length}`;
    }

    leftButton.addEventListener('click', () => {
        if (currentIndex > 0) { 
            currentIndex--;
            updateImage();
        }
    });

    rightButton.addEventListener('click', () => {
        if (currentIndex < imageSet.length - 1) {
            currentIndex++;
            updateImage();
        }
    });

    updateImage();
}