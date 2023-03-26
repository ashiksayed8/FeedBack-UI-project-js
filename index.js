const ratingsEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");


let selectedRating = " ";

ratingsEls.forEach(ratingEl => {
    ratingEl.addEventListener("click", (event) =>{
        selectedRating = event.target.innerText||event.target.parentNode.innerText;
        removeActive();
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

function removeActive(){
    ratingsEls.forEach((ratingsEl) => {
        ratingsEl.classList.remove("active");
    });
}

btnEl.addEventListener("click" ,() => {

    if(selectedRating !== " ") {
        containerEl.innerHTML = `<strong>Thank you!</strong>
        <br />
        <br />
        <strong>FeedBack: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>`;
    }
 

   
});