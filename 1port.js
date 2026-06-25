// Typing Effect

const text = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Developer",
    "React Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;

        setTimeout(type, 1000);
    }
    else{
        setTimeout(type, 100);
    }

})();

// Dark Light Mode

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// Scroll Animation

window.addEventListener("scroll", reveal);

function reveal(){

    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(item => {

        let windowHeight = window.innerHeight;
        let top = item.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            item.classList.add("active");
        }
    });
}

reveal();