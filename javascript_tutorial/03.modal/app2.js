const content = document.querySelector('.content')
const modal = document.querySelector('.modal')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        content.classList.toggle('active')
        modal.classList.toggle('active')
    })
})