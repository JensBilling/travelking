let carouselFrame = document.querySelector('#carouselFrame');

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


/*
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

 */