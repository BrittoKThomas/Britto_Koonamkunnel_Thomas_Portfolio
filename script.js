// Show welcome message when the page loads
window.onload = function () {
    console.log("Welcome to my portfolio website!");
};


// Example button action
function showMessage() {
    alert("Thanks for visiting my portfolio!");
}


// Smooth scroll for navigation links (if you add navbar later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
