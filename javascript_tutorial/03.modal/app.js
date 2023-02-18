console.log('modal')
const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const dimm = document.querySelector('.dimm')
const modal = document.querySelector('.modal')

openBtn.addEventListener('click', ()=>{
    dimm.classList.add('open')
    modal.classList.add('open')
})

closeBtn.addEventListener('click', ()=>{
    dimm.classList.remove('open')
    modal.classList.remove('open')
})

dimm.addEventListener('click', ()=>{
    dimm.classList.remove('open')
    modal.classList.remove('open')
})