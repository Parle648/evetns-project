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