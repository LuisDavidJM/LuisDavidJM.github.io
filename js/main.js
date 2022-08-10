'use strict'

//Scroll Reveal
window.sr = ScrollReveal();
sr.reveal(".about-me",{
    duration: 700,
    distance: '50%'
});
sr.reveal(".card",{
    duration: 700,
    distance: '50%'
});
sr.reveal(".index .left",{
    origin: 'left',
    duration: 700,
    distance: '50%'
});
sr.reveal(".index .right",{
    origin: 'right',
    duration: 700,
    distance: '50%'
});
sr.reveal(".certification",{
    duration: 700,
    distance: '50%'
});

$(document).ready(function(){
    //Navbar projects selection
	$('#project-nav .option-nav[category="all"]').addClass('active');

	$('.option-nav').click(function(){
		var catProject = $(this).attr('category');
		$('.option-nav').removeClass('active');
		$(this).addClass('active');
		//Hide all projectsx
		$('.projects').hide();
		//Show the category projects
		$('.projects[category="'+catProject+'"]').show();
	});
    //Show all projects
	$('.option-nav[category="all"]').click(function(){
		$('.projects').show();
	});

    //Certifications selection
    $('.certification').click(function(){
        var catDiploma = $(this).attr('category');
        console.log(catDiploma);
        $('.diploma[category="'+catDiploma+'"]').show('fast');
        $('.diploma[category="'+catDiploma+'"]').css('display', 'flex');
        $('.diploma[category="'+catDiploma+'"]').css('transform', 'scale(1)');
    });
    $('.img-diploma p').click(function(){
        $('.diploma').hide('slow');
        $('.diploma').css('transform', 'scale(0)');
    });
});

//Drop down menu section
var menu = document.querySelector('.menu');
var options = document.querySelector('.options');

menu.addEventListener("click", function () {
    options.classList.toggle('options-toggle');
});

//Up button and header section
var up = document.getElementById('up-button');
if(up != null){
    up.addEventListener('click', upSide);
}

function upSide() {
    var topScroll = document.documentElement.scrollTop;
    if (topScroll > 0) {
        window.requestAnimationFrame(upSide);
        window.scrollTo(0, topScroll - (topScroll / 10));
    }
}

var header = document.querySelector('.header');
window.onscroll = downSide;

function downSide() {
    var topScroll = document.documentElement.scrollTop;
    if (topScroll >= 700) {
        up.style.transform = 'scale(1)';
    } else {
        up.style.transform = 'scale(0)';
    }
    if (topScroll > 100) {
        header.style.height = '50px';
        header.style.borderBottom = '1px solid var(--primary-back)';
        options.style.top = '50px';
    } else {
        header.style.height = '80px';
        header.style.borderBottom = '1px solid var(--primary)';
        options.style.top = '80px';
    }
}

//Form and footer section
var form = $('#form-contact');
if(form != null){
    form.html('<form id="contact-form" action="" method="POST">' +
    '<div class="grid-form">' +
    '<div class="form-name">' +
    '<label for="name">Name</label>' +
    '<input id="name" type="text" name="name" class="name" required>' +
    '</div>' +
    '<div class="form-email">' +
    '<label for="email">Email</label>' +
    '<input id="email" type="email" name="email" class="email" required>' +
    '</div>' +
    '<div class="form-message">' +
    '<label for="message">Message</label>' +
    '<textarea id="message" name="message" class="message" required></textarea>' +
    '</div>' +
    '</div>' +
    '<div class="form-submit">' +
    '<input type="submit" class="submit" value="SEND">' +
    '</div>' +
    '</form>');
}

var footer = $('#footer-js');
footer.html('<footer class="footer">' +
    '<div class="copy">' +
    '<h3>Made with HTML, CSS and Javascript</h3>' +
    '<h3>Develop by Luis David Jimenez Martinez</h3>' +
    '</div>' +
    '</footer>');

//Form action
var form_submit = document.getElementById('contact-form');

if(form_submit != null){
    form_submit.addEventListener('submit', function (event) {
        event.preventDefault();
    
        const serviceID = 'default_service';
        const templateID = 'template_s72fxza';
    
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                form_submit.reset();
                alert('THE MESSAGE WAS SENT!!');
            }, (err) => {
                alert(JSON.stringify(err));
            });
    });
}

//Email show section
var main_contain = document.querySelector('.main-contain');
var main_email = document.querySelector('.main-email');
if(main_contain != null){
    main_contain.addEventListener('mouseover', function () {
        if(main_email != null){
            main_email.style.transform = 'scale(1)';
            main_email.style.transition = 'all 700ms ease';
            main_email.innerHTML = 'luisdavidjma@gmail.com';
        }
    });
    main_contain.addEventListener('mouseout', function () {
        if(main_email != null){
            main_email.style.transform = 'scale(0)';
            main_email.style.transition = 'all 4000ms ease';
        }
    });
}
