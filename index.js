const bourgerTrigger = document.querySelector('.bourger-trigger'),
      bourgerBody = document.querySelector('.bourger-body')

const borgerTrigerItems = document.querySelectorAll('.bourg-line');


bourgerTrigger.addEventListener('click', function(event){
    bourgerBody.classList.toggle('bourger-active')

    borgerTrigerItems[0].classList.toggle('first-line')
    borgerTrigerItems[1].classList.toggle('second-line')
    borgerTrigerItems[2].classList.toggle('last-line')

    scroll(0,0)
})


const navElem = document.querySelector('.offers-nav')

navElem.addEventListener('click', function(event){
    // CHANGE COLOR
    if(event.target.closest('.offers-item')){
        document.querySelectorAll('.offers-item').forEach(element => {
            element.style.background = '#fff'
        });
        document.querySelectorAll('.offer-body').forEach(function(element){
            element.classList.remove('display-body-block')
        })
        event.target.closest('.offers-item').style.background = '#6CAC3D'
        console.log(4)
    }
    // OPEN DROP-DOWN
    if(event.target.closest('.offer-drop-down')){
        console.log(event)
        document.querySelectorAll('.offer-body').forEach(function(element){
            element.classList.remove('display-body-block')
        })
        event.target.closest('.offer-drop-down').lastElementChild.classList.toggle('display-body-block')
    }
    // DROP-DOWN BORDER FOR ELEMENTS
    if(event.target.closest('.body-offer-item')){
        event.target.closest('.body-offer-item').parentNode.querySelectorAll('.body-offer-item').forEach(function(el){
            el.style.border = '0px'
        })
        event.target.closest('.body-offer-item').style.border = '1px solid green'
    }
})


const sliderTarget = document.querySelector('.area-target')
const slider = document.querySelector('area-slider')
let result = document.querySelector('.area-choise-result')

result.style.display = 'inline'

sliderTarget.addEventListener('mousedown', function(event){

    function move(event) {
        let margin = event.clientX - sliderTarget.parentNode.offsetLeft - sliderTarget.parentNode.parentNode.getBoundingClientRect().x - 11

        if(margin <= 0){
            sliderTarget.style.left = '0px'
            result.innerHTML = 0
        }
        else if( margin >= 298){
            sliderTarget.style.left = '298px'
            result.innerHTML = 150
        }
        else{
            sliderTarget.style.left = `${margin}px`
            result.innerHTML = Math.floor((margin / 289) * 150)
        }
    }
    sliderTarget.addEventListener('mousemove', move)
    document.addEventListener('mousemove', move)

    document.onmouseup = () => {
        document.removeEventListener('mousemove', move)
    }
    sliderTarget.onmouseup = () => {
        sliderTarget.removeEventListener('mousemove', move)
    }
})