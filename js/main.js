'use strict'

//Drop down menu section
var menu = document.querySelector('.menu');
var options = document.querySelector('.options');

menu.addEventListener("click", function() {
    options.classList.toggle('options-toggle');
});

//Up button and header section
var up = document.getElementById('up-button');
up.addEventListener('click', upSide);

function upSide(){
    var topScroll = document.documentElement.scrollTop;
    if(topScroll > 0){
        window.requestAnimationFrame(upSide);
        window.scrollTo(0, topScroll - (topScroll / 10));
    }
}

var header = document.querySelector('.header');
window.onscroll = downSide;

function downSide(){
    var topScroll = document.documentElement.scrollTop;
    if(topScroll >= 700){
        up.style.transform = 'scale(1)';
    }else{
        up.style.transform = 'scale(0)';
    }
    if(topScroll > 100){
        header.style.height = '50px';
        header.style.borderBottom = '1px solid var(--primary-back)';
        options.style.top = '50px';
    }else{
        header.style.height = '80px';
        header.style.borderBottom = '1px solid var(--primary)';
        options.style.top = '80px';
    }
}

//Email show section
var main_contain = document.querySelector('.main-contain');
var main_email = document.querySelector('.main-email');

main_contain.addEventListener('mouseover', function(){
    main_email.style.transform = 'scale(1)';
    main_email.style.transition = 'all 700ms ease';
    main_email.innerHTML = 'luisdavidjm@gmail.com'
});
main_contain.addEventListener('mouseout', function(){
    main_email.style.transform = 'scale(0)';
    main_email.style.transition = 'all 4000ms ease';
});