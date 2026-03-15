function scrollContact(){

document.querySelector("#contact").scrollIntoView({
behavior:"smooth"
})

}

/* smooth navigation */

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
})

})

})
