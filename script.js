
const bar = document.querySelector('#bar');
const nav = document.querySelector('#navbar');
const close = document.querySelector('#close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        // console.log("clicked");
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
};


// sproduct section (singleProduct)
// replacing small image with big image when got clicked

let MainImg = document.querySelector('#MainImg');
let smallimg = document.querySelectorAll('.small-img');

smallimg[0].addEventListener('click', () => {
    MainImg.src = smallimg[0].src;
})
smallimg[1].addEventListener('click', () => {
    MainImg.src = smallimg[1].src;
})
smallimg[2].addEventListener('click', () => {
    MainImg.src = smallimg[2].src;
})
smallimg[3].addEventListener('click', () => {
    MainImg.src = smallimg[3].src;
})


// let pro = document.querySelector('.pro');

// pro.addEventListener('click', () => {
//     window.location.href = sproduct.html;
// console.log('first image got clicked');
// });