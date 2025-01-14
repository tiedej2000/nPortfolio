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