$("#submit")[0].addEventListener('click', (e) => {
    $("#status").text("Thank you for your feedback!");
    e.preventDefault();
})

$("#contactForm")[0].addEventListener("submit", (e) => {
    e.preventDefault();
})


