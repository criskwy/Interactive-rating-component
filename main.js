let scoreContainer = document.querySelector(".score-container");
let submitBtn = document.querySelector(".submit-btn");
let ratingContainer = document.querySelector(".rating-container");
let thankyouStateContainer = document.querySelector(".thankyou-state-container");
let thankyouScore = document.querySelector(".thankyou-score")


scoreContainer.addEventListener("click", event=> {
    if(event.target.innerHTML > 0 || event.target.innerHTML <= 5){

        thankyouScore.innerHTML = event.target.innerHTML;


        submitBtn.addEventListener("click", ()=>{

            thankyouStateContainer.style.display="flex";
            ratingContainer.style.display = "none";
        })
    }
})