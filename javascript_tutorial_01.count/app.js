const price = document.querySelector('.price')
const count = document.querySelector('.count')
const sum = document.querySelector('.sum')
const btns = document.querySelectorAll('button')

let unit_price = 15000
let num  = 1

price.textContent = unit_price
count.textContent = num
sum.textContent = unit_price * num

function printTotalPrice(){
    count.textContent = num
    sum.textContent = unit_price * num
}

btns.forEach(btn => {
    //console.log(btn)
    btn.addEventListener('click', (e)=>{
        console.log(e.target.className)
        if(e.target.className === 'plus'){
            num++
            printTotalPrice()
        }else if(e.target.className === 'minus'){
            num--
            if(num <= 1) num = 1
            printTotalPrice()
        }else{
            num = 1
            printTotalPrice()
        }
    })
})