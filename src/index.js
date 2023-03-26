//Challenge 1
document.addEventListener('DOMContentLoaded', () => {

fetch("https://dog.ceo/api/breeds/image/random/4")
.then (response => response.json())
.then(data => {
    data.message.forEach(addImg) 
})

function addImg(imgUrl) {
    const myDog = document.createElement("img")
    myDog.src = imgUrl
    document.getElementById("dog-image-container").appendChild(myDog)
}
//Challenge 2
fetch("https://dog.ceo/api/breeds/list/all")
.then (response => response.json())
.then(data => {
    for (const breed in data.message) {
        addBreeds(breed)
    }
    
})
.then (colorChange)

function addBreeds(breeds){
    const myBreeds = document.createElement("li")
    myBreeds.textContent = breeds
    document.getElementById("dog-breeds").appendChild(myBreeds)

}
// Challenge Three
function colorChange() {
    const dogColor = document.querySelectorAll("li")
    for (const dawg of dogColor) {
        dawg.addEventListener('click', () => {
            dawg.style.color = "white"
        })
        dawg.style.cursor = "crosshair"
    }
}
colorChange()
// Challenge 4
document.getElementById("breed-dropdown").addEventListener('change', event =>{
    const myLetter = event.target.value
    filterDogs(myLetter);
} )
function filterDogs(char){
    const dawgs = document.querySelectorAll("li")
    for ( const dawg of dawgs ) {
        dawg.style.display = "block"
        if (!dawg.textContent.startsWith(char))
        dawg.style.display = "none"
    }
}
filterDogs()






})