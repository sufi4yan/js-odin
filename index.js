


    const myLibrary = JSON.parse(localStorage.getItem(`library`)) || []
let submit = document.getElementById(`submit-book`)
let bookTitle = document.getElementById(`title`)
let authorName = document.getElementById(`author-name`)
let pageQuantity = document.getElementById(`pages`)
let optionalUrl = document.getElementById(`url`)
let check = document.getElementById(`check`)
let form = document.getElementById(`newBook`)
const one = document.getElementById(`onestar`)
const two = document.getElementById(`twostar`)
const three = document.getElementById(`threestar`)
const four = document.getElementById(`fourstar`)
const five = document.getElementById(`fivestar`)
let stars = document.querySelectorAll(`.star`)
let which = 0
let hasRead = `no`
let ratings = 0
let template = ``
delButtons = document.querySelectorAll(`.button`)
let num = 0
found = null
let count = 0
let bookCont = document.createElement(`div`)
console.log(myLibrary)
function all(state) {
    num = 0
    function book(author, title, pages, hasRead, rating, ind) {
    this.author = author,
    this.title = title,
    this.pages = pages, 
    this.hasRead = hasRead,
    this.ratings = ratings,
    this.ind = ind
}


function addtoLibrary() {
    myLibrary.forEach((item) => {
        item.title === bookTitle.value ? found = true: found = false
    })
    if (!found) {
        if (check.checked) {
            hasRead = `yes`
        }
        else{
            hasRead = `no`
        }
        console.log(authorName.value)
        console.log(bookTitle.value)
        console.log(pageQuantity.value)
        console.log(hasRead)
        let books = new book(authorName.value, bookTitle.value, pageQuantity.value, hasRead, ratings, myLibrary.length)
        
        myLibrary.push(books)
        localStorage.setItem(`library`, JSON.stringify(myLibrary))
    
    
        
        template = `<div class="book anim">
            <div class="left">
                <img src="profile-pic.jpg" alt="" class="book-prev">
            <div class="text">
                <div id="titledisplayed">${bookTitle.value}</div>
                <div id="authordisplayed">${authorName.value}</div>
                <div id="rating">${ratings} stars</div>
            </div>
            </div>
            <div class="right">
                <button id="deleteBook${num}" class="buttondel mama"></button>
            </div>
            </div>`
        document.getElementById(`library`).innerHTML += template
        num += 1
        console.log(myLibrary)
        location.reload()
    }
    else{
        alert(`This book already exists!`)
    }
    
}

function hello() { myLibrary.forEach((item) => {
    console.log(myLibrary)

        
        console.log(`animation`)


        template = `<div class="book anim">
        <div class="left">
            <img src="profile-pic.jpg" alt="" class="book-prev">
        <div class="text">
            <div id="titledisplayed">${item.title}</div>
            <div id="authordisplayed">${item.author}</div>
            <div id="rating">${item.ratings} stars</div>
        </div>
        </div>
        <div class="right">
            <button id="deleteBook${num}" class="buttondel mama"></button>
        </div>
        </div>`
    document.getElementById(`library`).innerHTML += template
    
    num += 1
    if (state === `delete`) {
        document.querySelector(`.anim`).classList.add(`delete-anim`)
    }
    
})
}
hello()






document.querySelectorAll(`.mama`).forEach((item) => {
    item.addEventListener(`click`, () => {
        document.getElementById(`library`).innerHTML = ``
        console.log(item.id[item.id.length - 1])
        let itemid = item.id[item.id.length - 1]

        myLibrary.splice(itemid, 1)

        console.log(myLibrary)
        for (let i = 0; i < myLibrary.length; i++){
            myLibrary[i].ind = i
        }

        localStorage.setItem(`library`, JSON.stringify(myLibrary))
        console.log(myLibrary)

        all(`delete`)
        

        
    })
})








form.onsubmit = function() {
    event.preventDefault()
    addtoLibrary()
}


}
function rating(which) {
    which === `onestar` ? which = 1: which === `twostar` ? which = 2 : which === `threestar` ? which = 3: which === `fourstar` ? which = 4: which === `fivestar` ? which = 5:null 
     
    for (let i = 0; i < which; i++) {
        stars[i].classList.remove(`fa-regular`)
        stars[i].classList.add(`fa-solid`)
       console.log(stars[i].classList)
       for (let i = which; i <stars.length; i++){
        stars[i].classList.add(`fa-regular`)
        stars[i].classList.remove(`fa-solid`)
       }
    }
    ratings = which
}
function resett() {
    which = 0
    stars.forEach((item) => {
        item.classList.add(`fa-regular`)
        item.classList.remove(`fa-solid`)})
}
all()