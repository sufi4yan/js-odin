export class book{
    #title = ``
    #author = ``
    #pages = ``
    #rating = 0
    #hasRead = ``

    constructor(title, author, pages, rating, hasRead){
        this.title = title
        this.author = author 
        this.pages = pages
        this.rating = rating
        this.hasRead = hasRead
        if (!Number(pages) || Number(pages) < 20 || !title || !author) {
            throw new Error (`Cannot verify validity of data`)
        }
    }

    set title(newTitle){

        this.#title = newTitle
    }
    get title(){
        return this.#title
    }


    set author(newAuthor){
        this.#author = newAuthor
    }
    get author(){
        return this.#author
    }


    set pages(newPages){
        this.#pages = newPages
    }
    get pages(){
        return this.#pages
    }



    set rating(newRating){
        this.#rating = newRating
    }
    get rating(){
        return this.#rating
    }

    set hasRead(newhasRead){
        this.#hasRead = newhasRead
    }
    get hasRead(){
        return this.#hasRead
    }

    details(){
        
       return {
        title: this.#title,
        author: this.#author,
        pages: this.#pages,
        rating: this.#rating,
        hasRead: this.#hasRead
       }
            
    }

}
export function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}
