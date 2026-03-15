function downloadResume(){

alert("Resume download will be added here.");

}

// smooth scrolling
document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});

});
