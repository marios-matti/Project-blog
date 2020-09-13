const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");

searchBtn.addEventListener("click", function () {
    searchBox.classList.toggle("active");
});

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

let nextBtn = document.querySelector('.btn2');
let prevBtn = document.querySelector('.btn1');

nextBtn.addEventListener('click', function () {
    plusDivs(1);
    clearInterval(timer);

})
prevBtn.addEventListener('click', function () {
    plusDivs(-1);
    clearInterval(timer);
})

let timer = setInterval(() => {
    plusDivs(1);
}, 5000);

let goup = document.querySelector('.up');
goup.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})