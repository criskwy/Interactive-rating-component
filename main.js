let scoreContainer = document.querySelector(".score-container");
let submitBtn = document.querySelector(".submit-btn");
let ratingContainer = document.querySelector(".rating-container");
let thankyouStateContainer = document.querySelector(".thankyou-state-container");
let thankyouScore = document.querySelector(".thankyou-score")
let selectedScore = null;

/** score button state */

scoreContainer.addEventListener("click", event => {
    if (event.target.classList.contains("score-num")) {
        let score = parseInt(event.target.innerHTML);

        if (score > 0 && score <= 5) {

            selectedScore = score;
            thankyouScore.innerHTML = score;
        }
    }


})

/** submit button state */

submitBtn.addEventListener("click", () => {
    if (selectedScore !== null) {
        thankyouStateContainer.style.display = "flex";
        ratingContainer.style.display = "none";
    } else {
        alert("Please, select a score!")
    }

})