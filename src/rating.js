import { one, ratingdisp } from "./library.js"

const two = document.getElementById(`twostar`)
const three = document.getElementById(`threestar`)
const four = document.getElementById(`fourstar`)
const five = document.getElementById(`fivestar`)
let ratingCont = [one, two, three, four, five]
export {two, three, four, five, ratingCont}
let which = 0
export let ratings = 0
let stars = document.querySelectorAll(`.star`)
export function rating(which) {
    which === `onestar` ? which = 1: which === `twostar` ? which = 2 : which === `threestar` ? which = 3: which === `fourstar` ? which = 4: which === `fivestar` ? which = 5:null 
     
    for (let i = 0; i < which; i++) {
        stars[i].classList.remove(`fa-regular`)
        stars[i].classList.add(`fa-solid`)

       for (let i = which; i <stars.length; i++){
        stars[i].classList.add(`fa-regular`)
        stars[i].classList.remove(`fa-solid`)
       }
    }
    ratings = which
}

export function resett() {
    which = 0
    stars.forEach((item) => {
        item.classList.add(`fa-regular`)
        item.classList.remove(`fa-solid`)})
        ratingCont.forEach((item) => {
            item.classList.remove(`fa-solid`)
            item.classList.add(`fa-regular`)
        })
}
let starbold
ratingCont.forEach(()=> {
    starbold = one
    starbold.classList.add(`fa-solid`)
    starbold.style.display = `none`
    ratingdisp.appendChild(starbold.cloneNode(true))
    one.style.display = `inline`
    one.classList.remove(`fa-solid`)
})
