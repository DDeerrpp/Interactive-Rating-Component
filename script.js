var rating = -1;

function updateRating(num) {
    rating = num
    console.log(rating)
}

document.querySelector(".submit").addEventListener('click', () => {
    if (rating === -1 ) return;
    document.querySelector(".selected-rating").innerText = `You selected ${rating} out of 5`
    document.getElementById("component").dataset.state = "thank-you";
})

