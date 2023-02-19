const content = document.querySelectorAll('.content')

console.log(content)

for(let i = 0; i < content.length; i++){
    // content[i].addEventListener('click', () => {
    //     console.log(this)
    // })

    content[i].addEventListener('click', function() {
        //console.log(this)
        this.classList.toggle('active')
    })
}