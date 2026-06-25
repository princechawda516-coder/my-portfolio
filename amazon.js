// Search button
let searchBtn = document.querySelector("button");

// Search input
let searchInput = document.querySelector(".search-input");

// Sare boxes
let boxes = document.querySelectorAll(".box");


// Search function
searchBtn.addEventListener("click", function () {

    let inputValue = searchInput.value.toLowerCase();

    boxes.forEach(function (box) {

        let heading = box.querySelector("h2").innerText.toLowerCase();

        // Match hone par box dikhega
        if (heading.includes(inputValue)) {
            box.style.display = "block";
        }

        // Match nahi hone par hide hoga
        else {
            box.style.display = "none";
        }

    });

});


// Enter key support
searchInput.addEventListener("keyup", function(event){

    if(event.key === "Enter"){
        searchBtn.click();
    }

});


// Back to top
let backTop = document.querySelector(".foot-panel1");

backTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});