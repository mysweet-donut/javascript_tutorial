const form = document.querySelector('form')
const input = form.querySelector('input')
const foodList = document.querySelector('.food_list')

const APP_ID = '45b0e405'
const APP_KEY = '2b8724db4a5c0fa6881ef312ec702bd1'

function paintRecipe(items){
    let foods = ''
    items.map(item =>{
        foods += `
        <div class="food">
            <div class="food_img">
                <img src="${item.recipe.image}" alt="">
            </div>
            <div class="food_info">
                <div class="food_title">
                    <h3>${item.recipe.label}</h3>
                    <a href="${item.recipe.url}" target="_blank">view recipe</a>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium accusamus consequatur, distinctio deserunt, est, in libero illo numquam qui magnam velit officiis delectus possimus enim vel? Voluptatibus, ipsam labore! Totam.
                    </p>    
                </div>
            </div>
        </div>
        `
    })

    foodList.innerHTML = foods
}


function getRecipe(query){
    console.log(query)
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`

    fetch(url)
    .then((response) => response.json())
    .then((data) => paintRecipe(data.hits));
}

function init(){
    form.addEventListener('submit', function(e){
        e.preventDefault()
        const query = input.value
        getRecipe(query)
    })
}

init()