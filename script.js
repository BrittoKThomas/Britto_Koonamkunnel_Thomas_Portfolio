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

/* typing animation */

const text = [
"QA Engineer",
"Selenium Automation Engineer",
"Java Test Automation Developer",
"Software Tester"
]

let count = 0
let index = 0
let currentText = ""
let letter = ""

function type(){

if(count === text.length){
count = 0
}

currentText = text[count]

letter = currentText.slice(0, ++index)

document.querySelector(".typing").textContent = letter

if(letter.length === currentText.length){
count++
index = 0
setTimeout(type,1500)
}
else{
setTimeout(type,100)
}

}

type()

/* dark mode toggle */

document.getElementById("darkToggle").onclick = function(){

document.body.classList.toggle("dark-mode")

}
