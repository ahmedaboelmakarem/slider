

document.addEventListener("click", function () {
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`

})
var popUp = document.getElementById("popUp")
var popUpImage = document.getElementById("popUpImage")
var allImages = Array.from(document.querySelectorAll(".item img"))
var closeButton = document.querySelector("#close")
var prevButton = document.querySelector("#prev")
var nextButton = document.querySelector("#next")
var currentIndex

for (var i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener("click", function (e) {
        popUp.classList.replace("d-none", "d-flex")
        currentIndex = allImages.indexOf(e.target)
        var clickedImageSrc = e.target.getAttribute("src")
        popUpImage.style.backgroundImage = `url(${clickedImageSrc})`

    })
}

closeButton.addEventListener("click", closeSlider)
function closeSlider() {
    popUp.classList.replace("d-flex", "d-none")
}

nextButton.addEventListener("click", () => {
    slide(1)
})
prevButton.addEventListener("click", () => {
    slide(-1)
})

function slide(flag) {
    currentIndex = currentIndex + flag
    if (currentIndex < 0) {
        currentIndex = allImages.length - 1
    } else if (currentIndex == allImages.length) {
        currentIndex = 0
    }
    var prevSlide = allImages[currentIndex].src
    popUpImage.style.backgroundImage = `url(${prevSlide})`

}

document.addEventListener("keyup", function (e) {

    if (e.key == "ArrowRight") {
        slide(1)
    } else if (e.key == "ArrowLeft") {
        slide(-1)
    } else if (e.key == "Escape") {
        closeSlider()
    }
})
