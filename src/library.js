
import { capital_letter } from "./Book.js"
let bookCont = document.createElement(`div`)
let ratingdisp = document.createElement(`div`)
const one = document.getElementById(`onestar`)
let delbut = document.createElement(`button`)
let titledisp = document.createElement(`div`)
let authordisp = document.createElement(`div`)
const searchgoogle = document.createElement(`button`)

delbut.classList.add(`mama`)
delbut.classList.add(`buttondel`)
const showlib = document.createElement(`button`)
showlib.classList.add(`floating`)
showlib.setAttribute(`id`, `showlib`)
showlib.innerText = `^`
const searchBar = document.createElement(`input`)

export { bookCont, ratingdisp, delbut, titledisp, authordisp, searchBar, searchgoogle, one }
searchBar.classList.add(`search`)
searchBar.setAttribute(`type`, `search`)
searchBar.setAttribute(`placeholder`, `Search`)

export class Library {
    constructor() {
        this.#books = JSON.parse(localStorage.getItem('library')) || []
      }
    #books =  [];

    addtolibrary(book) {
        if (this.#books.some(b => b.title === book.title)) {
            alert('Book already exists!');
        } else {
            this.#books.push(book.details());
            this.saveToLocalStorage();
        }
    }

    removefromlib(title) {
        this.#books = this.#books.filter(book => book.title !== title);
        this.saveToLocalStorage();
    }

    findByTitle(title) {
        const filteredArray = this.#books.filter(book => book.title.toLowerCase().replaceAll(' ', '').includes(title.toLowerCase().replaceAll(' ', '')));
        return filteredArray
    }

    listbooks() {
        return this.#books;
    }

    update(array) {
            let num = 0
            document.getElementById(`library`).classList.remove(`only`)
            document.getElementById('library').textContent = ''
            document.getElementById('library').appendChild(showlib)

            document.getElementById('library').appendChild(searchBar)
            
            if (array.length > 0){
                array.forEach((item) => {
                    ratingdisp.textContent = ''
                    titledisp.textContent = item.title
                    authordisp.textContent = item.author
                    for (let i = 0; i < item.rating; i++) {
                        let starbold = one.cloneNode(true);
                        starbold.classList.add('fa-solid');
                        starbold.style.display = 'inline';
                        ratingdisp.appendChild(starbold);
                    }
                    delbut.setAttribute(`id`, `delbutton${num}`)
                    searchgoogle.setAttribute(`id`, `searchbar${num}`)
                    num++
                    
                    document.getElementById('library').appendChild(bookCont.cloneNode(true))
                    
            
                })
                this.htmlForDel()
                this.searchgoogle()
            }
            else{
                document.getElementById('library').appendChild(showlib)
                document.getElementById('library').appendChild(searchBar)
                document.getElementById(`library`).classList.add(`only`)
            }
            
        
        

    }

    saveToLocalStorage() {
        localStorage.setItem('library', JSON.stringify(this.#books));
    }
    htmlForDel(){
        document.querySelectorAll(`.mama`).forEach((item) => {
            item.addEventListener(`click`, () => {
                this.removefromlib(this.listbooks()[item.id.slice(-1)].title)
                this.update(this.#books)
            })
        })
    }
    searchgoogle(){
        document.querySelectorAll(`.access`).forEach((item) =>{
            item.addEventListener(`click`, () => {
            let newTab = document.createElement('a');
            let newURL = String(this.listbooks()[item.id.slice(-1)].title)
            newURL = capital_letter(newURL).replaceAll(`Of`, `of`)

            newTab.href = `https://en.wikipedia.org/wiki/${newURL.replaceAll(` `, `_`)}`
            newTab.target = "_blank";
            newTab.click();
            })
        })
    }
    sort(type){
        let filteredArray
        switch(type){
            
            case `read`:
                filteredArray = this.#books.filter(book =>  book.hasRead === `yes`);
                return filteredArray
                break
            case `unread`:
                filteredArray = this.#books.filter(book =>  book.hasRead === `no`);
                return filteredArray
                break

        }
        
    }
       
    
}