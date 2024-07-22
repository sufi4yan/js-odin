import { book } from "./Book.js"
import { bookCont, Library, ratingdisp, delbut, titledisp, authordisp, searchBar, searchgoogle } from "./library.js"
import { rating, ratingCont, resett } from "./rating.js"
window.rating = rating
window.resett = resett

let ratings = 0

    let submit = document.getElementById(`submit-book`)
    let optionalUrl = document.getElementById(`url`)
    let check = document.getElementById(`check`)

    //      create elements
    let left = document.createElement(`div`)
    let bookimg = document.createElement(`img`)
    let text = document.createElement(`div`)
    let right = document.createElement(`div`)
    let editbut = document.createElement(`button`)
    let upper = document.createElement(`div`)
    let bottom = document.createElement(`div`)
    
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
    bookimg.setAttribute(`src`, `src/assets/book.png`)
    right.classList.add(`right`)
    

    editbut.classList.add(`buttondel`)
    editbut.classList.add(`edit`)
    editbut.classList.add(`edite`)

    searchgoogle.textContent = `Search On google`
    searchgoogle.classList.add(`access`)
    bottom.classList.add(`gogle`)
    // appending to relevant parents
    editbut.appendChild(bookimg)
    left.appendChild(editbut)
    text.appendChild(titledisp)
    text.appendChild(authordisp)
    text.appendChild(ratingdisp)
    bottom.appendChild(searchgoogle)

    right.appendChild(delbut)
    upper.appendChild(left)
    upper.appendChild(right)
    bookCont.appendChild(upper)
    bookCont.appendChild(text)
    bookCont.appendChild(bottom)

        console.log( JSON.parse(localStorage.getItem(`library`)))

        


        let librar = new Library();


        submit.addEventListener('click', (ev) => {
            let bookTitle = document.getElementById('title').value;
            let authorName = document.getElementById('author-name').value;
            let pageQuantity = document.getElementById('pages').value;
            if (bookTitle && authorName && pageQuantity) {
                if (confirm(`Are you sure you want to proceed? You cannot change the information beyond this stage.`)){
                    ev.preventDefault();
                let ifread = ``
                
                if (check.checked) {
                    ifread = `yes`
                }
                else{
                    ifread = `no`
                }
                
                try {
                    librar.addtolibrary(new book(bookTitle, authorName, pageQuantity, ratings, ifread));
                    librar.update(librar.listbooks());
                } catch (error) {
                    console.error('Error adding book:', error.message);
                }
                }
            }
            
            
        });


        librar.update(librar.listbooks());



document.getElementById('scrollDownBtn').addEventListener('click', function() {
    window.scrollBy({
      top: window.innerHeight - (document.getElementById(`library`).clientHeight - 100),
      behavior: 'smooth'
    });
  });
  if (document.getElementById(`library`).clientHeight > window.innerHeight) {
    console.log(document.getElementById(`library`).clientHeight)
    console.log(window.innerHeight)
}
document.getElementById(`showlib`).addEventListener(`click`, () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: `smooth`
    })
})
searchBar.addEventListener(`keyup`, () => {
    librar.update(librar.findByTitle(searchBar.value))
    console.log(librar.findByTitle(searchBar.value))
    searchBar.focus()
})
document.getElementById(`profilepop`).addEventListener(`change`, () => {
    if (document.getElementById(`profilepop`).checked){document.getElementById(`overl`).classList.add(`overlay`)}
        else if (!document.getElementById(`profilepop`).checked){document.getElementById(`overl`).classList.remove(`overlay`)}
})
document.querySelectorAll(`.anim`).forEach((item) => {
    item.addEventListener(`dblclick`, () => {

        item.style.transform = `scale(2.5)`
        setTimeout(() => {window.scrollBy({top: window.innerHeight, behavior:"smooth"})}, 400);
        
        item.addEventListener(`click`, () => {

            item.style.transform = `scale(1)`
            
    
        })
    })
})
document.querySelectorAll(`.select-buttons`).forEach((item) => {
    console.log(item)
    item.addEventListener(`click`, () => {
        document.querySelectorAll(`.select-buttons`).forEach((item) => {
            item.style.opacity = `0.5`
            item.style.color = `white`
        })
        item.style.opacity = `1`
        item.style.color = `white`

        
        switch(item.id){
            case `all`:
                
                setTimeout(() => {
                   
                    librar.update(librar.listbooks())
                }, 100);
                document.querySelectorAll(`.anim`).forEach((item) => {item.classList.add(`book-anim`)})
                break 
            case `read`:
                setTimeout(() => {

                    librar.update(librar.sort(`read`))
                }, 100);
                document.querySelectorAll(`.anim`).forEach((item) => {item.classList.add(`book-anim`)})
                break 
            case `unread`:
                setTimeout(() => {

                    librar.update(librar.sort(`unread`))
                }, 100);
                document.querySelectorAll(`.anim`).forEach((item) => {item.classList.add(`book-anim`)})
                break 
            
        }


    })
})
document.getElementById(`all`).click()
check.addEventListener(`change`, () => {
    if (check.checked){
        document.querySelectorAll(`.ratingcont`).forEach((item) => {
            item.style.display = `block`
        })
    }
    else{
        ratings -= ratings
        document.querySelectorAll(`.ratingcont`).forEach((item) => {
            item.style.display = `none`
            
        })
        
    }
})

