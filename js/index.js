let carouselIndex = 0;
carousel();

function carousel() {
    let i;
    let x =  document.getElementsByClassName("mySlides");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    carouselIndex++;
    if (carouselIndex > x.length) {
        carouselIndex = 1
    }
    x[carouselIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
}