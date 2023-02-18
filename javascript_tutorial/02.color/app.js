const bg = ['orange', 'blue', 'red', 'pink', 'yellow', 'green']
const hex = [0,1,2,3,4,5,6,7,8,9,'a', 'b', 'c', 'd', 'e', 'f']
const bgBtn = document.getElementById('bgBtn')
const hexBtn = document.getElementById('hexBtn')
const color = document.querySelector('.color')

//1~10까지 랜던한 숫자가 나온다?
Math.random(Math.floor(Math.random()*6))

function getBgNum(){
   return Math.floor(Math.random()* bg.length)
}

function getHexNum(){
    return Math.floor(Math.random()* hex.length)
}

bgBtn.addEventListener('click', ()=>{
    const randomBgNum = getBgNum()
    document.body.style.backgroundColor = bg[randomBgNum]
    color.textContent = bg[randomBgNum]
})

hexBtn.addEventListener('click', ()=>{
    //for(변수; 조건; 증감식){}
    let hexColor = '#'
    for(let i = 0; i < 6; i++ ){
        //hexColor = hexColor + hex[getHexNum()]
        hexColor += hex[getHexNum()]
    }
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
})