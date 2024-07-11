


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

let num = 0
found = null
let count = 0
//      create elements
let bookCont = document.createElement(`div`)
let left = document.createElement(`div`)
let bookimg = document.createElement(`img`)
let text = document.createElement(`div`)
let titledisp = document.createElement(`div`)
let authordisp = document.createElement(`div`)
let ratingdisp = document.createElement(`div`)
let right = document.createElement(`div`)
let delbut = document.createElement(`button`)
let editbut = document.createElement(`button`)
//// setting relevant classes

bookCont.classList.add(`book`)
bookCont.setAttribute(`id`, `bookcont`)
bookCont.classList.add(`anim`)
left.classList.add(`left`)
bookimg.classList.add(`book-prev`)
text.classList.add(`text`)
titledisp.setAttribute(`id`, `titledisplayed`)
authordisp.setAttribute(`id`, `authordisplayed`)
ratingdisp.setAttribute(`id`, `rating`)
bookimg.setAttribute(`src`, `profile-pic.jpg`)
right.classList.add(`right`)
delbut.classList.add(`buttondel`)
delbut.classList.add(`mama`)
editbut.classList.add(`buttondel`)
editbut.classList.add(`edit`)
editbut.classList.add(`edite`)


// appending to relevant parents

left.appendChild(bookimg)
text.appendChild(titledisp)
text.appendChild(authordisp)
text.appendChild(ratingdisp)
left.appendChild(text)
right.appendChild(editbut)
right.appendChild(delbut)
bookCont.appendChild(left)
bookCont.appendChild(right)
console.log(myLibrary)


function all(state) {
    document.getElementById(`library`).innerHTML = ``
    num = 0
    function book(author, title, pages, hasRead, rating, ind) {
    this.title = title,
    this.author = author,
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
    
        
        titledisp.textContent = bookTitle.value
        authordisp.textContent = authorName.value
        ratingdisp.textContent = `${ratings} stars`
        
        console.log(document.getElementById(`library`).appendChild(bookCont.cloneNode(true)))
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


        titledisp.textContent = item.title
        authordisp.textContent = item.author
        ratingdisp.textContent = `${item.ratings} stars`
        delbut.setAttribute(`id`, `deleteBook${num}`)
        editbut.setAttribute(`id`, `editBook${num}`)
        document.getElementById(`library`).appendChild(bookCont.cloneNode(true))
        console.log(document.getElementById(`library`).innerHTML)

    
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
        console.log(itemid)
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

document.querySelectorAll('.edite').forEach((item) => {
    console.log(`h`)
    item.addEventListener(`click`, () => {
        console.log(item.id[item.id.length - 1])
        let itemid = item.id[item.id.length - 1]

        let bookContrep = document.createElement(`div`)
        let leftrep = document.createElement(`div`)
        let bookimgrep = document.createElement(`img`)
        let textrep = document.createElement(`div`)
        let titledisprep = document.createElement(`input`)
        let authordisprep = document.createElement(`input`)
        let ratingdisprep = document.createElement(`input`)
        let cross = document.createElement(`button`)
        let rightrep = document.createElement(`div`)
        let checkbo = document.createElement(`input`)
        let editsub = document.createElement(`button`);
        
    
        checkbo.setAttribute(`type`, `checkbox`)
        checkbo.setAttribute(`id`, `checkbo`)

        leftrep.appendChild(bookimgrep)
        
        textrep.appendChild(titledisprep)
        textrep.appendChild(authordisprep)
        textrep.appendChild(ratingdisprep)
        textrep.appendChild(checkbo)
        textrep.appendChild(editsub)
        rightrep.appendChild(textrep)
        
        
        bookContrep.appendChild(leftrep)
        bookContrep.appendChild(rightrep)
        bookContrep.appendChild(cross)
    
        console.log(myLibrary)
        textrep.classList.add(`rightrep`)
        bookContrep.classList.add(`book-rep`)
        cross.classList.add(`cross`)
        bookContrep.setAttribute(`id`, `bookcont-rep`)
        bookContrep.classList.add(`anim`)
        leftrep.classList.add(`leftrep`)
        rightrep.classList.add(`rightrep`)
        bookimgrep.classList.add(`book-prev`)
        textrep.classList.add(`text`)
        titledisprep.setAttribute(`value`, myLibrary[itemid].title)
        titledisprep.setAttribute(`id`, `titledisplayed`)
        authordisprep.setAttribute(`id`, `authordisplayed`)
        ratingdisprep.setAttribute(`id`, `rating`)
        authordisprep.setAttribute(`value`, myLibrary[itemid].author)
        ratingdisprep.setAttribute(`value`, myLibrary[itemid].ratings)
        bookimgrep.setAttribute(`src`, `profile-pic.jpg`)
        console.log(`hello`)
        document.querySelector(`body`).appendChild(bookContrep)
        editsub.classList.add(`submit-edit`)
        cross.addEventListener(`click`, () => {
            bookContrep.remove()
        })
        editsub.addEventListener(`click`, () => {
            const confir = confirm(`Do you want to commit the changes to the book?`)
            if (confir) {
                myLibrary[itemid].author = authordisprep.value
                console.log(myLibrary[itemid].author)
                console.log(myLibrary[itemid])
                localStorage.setItem(`library`, JSON.stringify(myLibrary))
                all()
                bookContrep.remove()
            }
        })
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