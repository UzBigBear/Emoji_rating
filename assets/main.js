const starelements = document.querySelectorAll(".fa-star");
const emojielements = document.querySelectorAll(".far");
const colorArry = ["red", "orange", "lightblue", "lightgreen", "green"]

updateRating(0);
starelements.forEach((starelements, index) => {
    starelements.addEventListener("click", () => {
        updateRating(index);
    });
})

function updateRating(index) {
    starelements.forEach((starelements, idx) => {
        if(idx < index + 1){
            starelements.classList.add("active")
        }else{
            starelements.classList.remove("active")
        }
    });

    emojielements.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index * 50}px)`;
        emoji.style.color = colorArry[index];
    });
}