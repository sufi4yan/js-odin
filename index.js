


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
selectionel = document.getElementById(`hello`)
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
let upper = document.createElement(`div`)
//// setting relevant classes
upper.classList.add(`upper`)
bookCont.classList.add(`book`)
bookCont.setAttribute(`id`, `bookcont`)
bookCont.classList.add(`anim`)
left.classList.add(`left`)
bookimg.classList.add(`book-prev`)
text.classList.add(`text`)
titledisp.setAttribute(`id`, `titledisplayed`)
authordisp.setAttribute(`id`, `authordisplayed`)
ratingdisp.setAttribute(`id`, `rating`)
bookimg.setAttribute(`src`, `book.png`)
right.classList.add(`right`)
delbut.classList.add(`buttondel`)
delbut.classList.add(`mama`)
editbut.classList.add(`buttondel`)
editbut.classList.add(`edit`)
editbut.classList.add(`edite`)


// appending to relevant parents
editbut.appendChild(bookimg)
left.appendChild(editbut)
text.appendChild(titledisp)
text.appendChild(authordisp)
text.appendChild(ratingdisp)


right.appendChild(delbut)
upper.appendChild(left)
upper.appendChild(right)
bookCont.appendChild(upper)
bookCont.appendChild(text)
console.log(myLibrary)


function all() {
    
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
check.addEventListener(`change`, () => {
    ratingCont = document.querySelectorAll(`.ratingcont`)
    ratingCont.forEach((item) => {
        if (check.checked) {
            item.setAttribute(`style`, `display:block`)
        }
        else{
            item.setAttribute(`style`, `display:none`)
            ratings = 0
        }
        
    })
})

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
let libNames = []
function hello(sort) {
    
    libNames = []
    copyLib = []
    num = 0
    sort.forEach((item) => {
        ratingdisp.textContent = ''
        titledisp.textContent = item.title
        authordisp.textContent = item.author
        console.log(item.ratings)
        for (let i = 0; i < item.ratings; i++) {
            solidStar = one
            solidStar.classList.add(`fa-solid`)
            ratingdisp.appendChild(solidStar.cloneNode(true))
            solidStar.classList.remove(`fa-solid`)
            console.log(`ok`)
        }
        delbut.setAttribute(`id`, `deleteBook${num}`)
        editbut.setAttribute(`id`, `editBook${num}`)
        document.getElementById(`library`).appendChild(bookCont.cloneNode(true))

        const withoutspace = item.title
        libNames.push(withoutspace.replaceAll(' ', ''))
        
        
        
    
    num += 1
  
        
    
    
})
}
hello(myLibrary)
console.log(myLibrary)
function sortBy() {
    let copyLib = []
    console.log(copyLib)
    myLibrary.forEach((item) => {
        copyLib.push(item)
    })
    console.log(copyLib)
    console.log(myLibrary)
    
    let buffer = null
    const libNamesSorted = libNames.sort()
    console.log(libNamesSorted)
    let i = 0
    copyLib.forEach((item) => {
        const withoutspace = item.title
        const withoutspacereal = withoutspace.replaceAll(' ', '')
        buffer = copyLib[i]
        copyLib[i] = copyLib[libNamesSorted.indexOf(withoutspacereal)]
        copyLib[libNamesSorted.indexOf(withoutspacereal)] = buffer
        i++
        console.log(libNamesSorted.indexOf(withoutspacereal))
    })

    
    console.log(copyLib)
    document.getElementById(`library`).innerHTML = ``

    hello(copyLib)
}

selectionel.addEventListener(`change`, () => {
    localStorage.setItem(`sorting-mode`, JSON.stringify(selectionel.value))
    if (selectionel.value === `by-name`) {
        sortBy()
    }
    if (selectionel.value === `least-recent`) {
        console.log(`hello`)
        console.log(myLibrary)
        console.log(copyLib)
        document.getElementById(`library`).innerHTML = ``
        hello(myLibrary)

    }
    
})







document.querySelectorAll(`.mama`).forEach((item) => {
    item.addEventListener(`click`, () => {
        document.querySelectorAll(`.anim`).forEach((item) => {
            console.log(item)
        })
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

        all()
        

        
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
    
        console.log(itemid)
        textrep.classList.add(`rightrep`)
        bookContrep.classList.add(`book-rep`)
        cross.classList.add(`cross`)
        bookContrep.setAttribute(`id`, `bookcont-rep`)
        bookContrep.classList.add(`anim`)
        leftrep.classList.add(`leftrep`)
        rightrep.classList.add(`rightrep`)

        textrep.classList.add(`text`)
        titledisprep.setAttribute(`value`, myLibrary[itemid].title)
        titledisprep.setAttribute(`id`, `titledisplayedprep`)
        authordisprep.setAttribute(`id`, `authordisplayedprep`)
        ratingdisprep.setAttribute(`id`, `ratingprep`)
        authordisprep.setAttribute(`value`, myLibrary[itemid].author)
        ratingdisprep.setAttribute(`value`, myLibrary[itemid].ratings)
        ratingdisprep.setAttribute(`type`, `number`)
        ratingdisprep.setAttribute(`max`, `5`)
        ratingdisprep.setAttribute(`onkeydown`, `return false`)
        ratingdisprep.setAttribute(`min`, `0`)
        
        ratingdisprep.style.display = `none`
        check.addEventListener(`change`, () => {
                if (check.checked) {
                    item.setAttribute(`style`, `display:block`)
                    
                }
                else{
                    item.setAttribute(`style`, `display:none`)
                    ratings = 0
                }
        })

        if (myLibrary[itemid].hasRead === `yes`) {
            checkbo.checked = true
            ratingdisprep.style.display = `block`
        }
        

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
                myLibrary[itemid].ratings = Number(ratingdisprep.value)
                myLibrary[itemid].title = titledisprep.value
                if (checkbo.checked) {
                    myLibrary[itemid].hasRead = `yes`
                }
                console.log(myLibrary[itemid].rating)
                console.log(myLibrary[itemid])
                localStorage.setItem(`library`, JSON.stringify(myLibrary))
                all()
                bookContrep.remove()
            }
        })
    })
        
})


document.getElementById('scrollDownBtn').addEventListener('click', function() {
    window.scrollBy({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    });
  });




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
        ratingCont.forEach((item) => {
            item.style.display = `none`
        })
}


all()