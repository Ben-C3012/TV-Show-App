// UI 
const form = document.querySelector('#form')
const button = document.querySelector('#button')
const searchInput = document.querySelector('#searchInput')
const ul = document.querySelector('#ul')
const clearButton = document.querySelector('#clear-button')
const container = document.querySelector('#container')
const imageContainer = document.querySelector('.image-container')
const hero = document.querySelector('.hero')



// Event Listener 
form.addEventListener('submit', searchShow)
clearButton.addEventListener('click', refreshWindow)

// Search Show fucntion
function searchShow(e) {
e.preventDefault()
console.log(searchInput.value);





// get APi With Axios
axios.get(`https://api.tvmaze.com/search/shows?q=${searchInput.value}`)
.then(res => {
    console.log('Resloved', res);
    const imageSource = res.data[0].show.image.medium
    // Get the rating of the show
    const showRating = res.data[0].show.rating.average
    console.log(showRating);

// Create an image elemnt 
let newImage = document.createElement('img')
// attach image source to image 
newImage.src = imageSource
// Appned image to container
imageContainer.append(newImage)



// // Create ul , li 
// const newUL = document.createElement('ul')
// const newLi = document.createElement('li')

// // appned ul to li and text to li 
// container.append(imageContainer)
// imageContainer.classList.add('image-container')
// imageContainer.append(newUL)
// newUL.appendChild(newLi)
// newLi.innerHTML = `<i class="fa-solid fa-star"></i> ${showRating}`






// Create ul , li 
const newUL = document.createElement('ul')
const newLi = document.createElement('li')

// appned ul to li and text to li 
container.append(imageContainer)
imageContainer.classList.add('image-container')
imageContainer.append(newUL)
newUL.appendChild(newLi)
newLi.innerHTML = `<i class="fa-solid fa-star"></i> ${showRating}`







console.log(imageContainer);



// Clear output
searchInput.value = ''


if(showRating == null) {
    newLi.innerHTML = `<i class="fa-solid fa-star"></i> No Rating`
    
}




})
.catch( err => {
    console.log('Error', err);
})







}





function refreshWindow() {
    window.location.reload()
}