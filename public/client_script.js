const cards = document.querySelectorAll(".card")
const currentPage = window.location.pathname

for (let card of cards) {
    card.addEventListener("click", function() {

        const urlID = card.getAttribute("number")

        if (currentPage.includes('recipes')) {
          window.location.href = `recipes/${urlID}`
        } else {
          window.location.href = `client/recipes/${urlID}`
        }
    });
};
