/*Author: Luis David Jimenez Martinez*/
$(document).ready(function(){

    /* Slider section */
    if(window.location.href.indexOf('index') > -1){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1200,
        responsive: true
      });
    }

    /* Articles section */
    if(window.location.href.indexOf('index') > -1){
    var articles = [
        {
            title: 'Titulo 1',
            date: new Date().getFullYear(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam recusandae possimus, vitae nihil libero quo delectus modi, nisi amet suscipit eaque voluptatem commodi praesentium consequuntur quaerat aliquam natus nostrum quidem! Ratione harum, dolorum nemo magni reiciendis tempore! Voluptatum natus, rerum quis iusto facere, id officia cupiditate quasi, vel architecto iste recusandae dignissimos maiores! Iste voluptatibus possimus nostrum harum optio eveniet voluptas blanditiis, ullam ad voluptates tempora? Eos similique sequi quaerat molestias! Minima pariatur error vitae doloremque inventore architecto animi sequi dolorum suscipit rerum? Ipsum cumque velit accusantium iusto. Totam ipsum dignissimos sequi culpa quos deserunt repellendus labore architecto. Consectetur, assumenda!'
        },
        {
            title: 'Titulo 2',
            date: new Date().getFullYear(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam recusandae possimus, vitae nihil libero quo delectus modi, nisi amet suscipit eaque voluptatem commodi praesentium consequuntur quaerat aliquam natus nostrum quidem! Ratione harum, dolorum nemo magni reiciendis tempore! Voluptatum natus, rerum quis iusto facere, id officia cupiditate quasi, vel architecto iste recusandae dignissimos maiores! Iste voluptatibus possimus nostrum harum optio eveniet voluptas blanditiis, ullam ad voluptates tempora? Eos similique sequi quaerat molestias! Minima pariatur error vitae doloremque inventore architecto animi sequi dolorum suscipit rerum? Ipsum cumque velit accusantium iusto. Totam ipsum dignissimos sequi culpa quos deserunt repellendus labore architecto. Consectetur, assumenda!'
        },
        {
            title: 'Titulo 3',
            date: new Date().getFullYear(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam recusandae possimus, vitae nihil libero quo delectus modi, nisi amet suscipit eaque voluptatem commodi praesentium consequuntur quaerat aliquam natus nostrum quidem! Ratione harum, dolorum nemo magni reiciendis tempore! Voluptatum natus, rerum quis iusto facere, id officia cupiditate quasi, vel architecto iste recusandae dignissimos maiores! Iste voluptatibus possimus nostrum harum optio eveniet voluptas blanditiis, ullam ad voluptates tempora? Eos similique sequi quaerat molestias! Minima pariatur error vitae doloremque inventore architecto animi sequi dolorum suscipit rerum? Ipsum cumque velit accusantium iusto. Totam ipsum dignissimos sequi culpa quos deserunt repellendus labore architecto. Consectetur, assumenda!'
        },
        {
            title: 'Titulo 4',
            date: new Date().getFullYear(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam recusandae possimus, vitae nihil libero quo delectus modi, nisi amet suscipit eaque voluptatem commodi praesentium consequuntur quaerat aliquam natus nostrum quidem! Ratione harum, dolorum nemo magni reiciendis tempore! Voluptatum natus, rerum quis iusto facere, id officia cupiditate quasi, vel architecto iste recusandae dignissimos maiores! Iste voluptatibus possimus nostrum harum optio eveniet voluptas blanditiis, ullam ad voluptates tempora? Eos similique sequi quaerat molestias! Minima pariatur error vitae doloremque inventore architecto animi sequi dolorum suscipit rerum? Ipsum cumque velit accusantium iusto. Totam ipsum dignissimos sequi culpa quos deserunt repellendus labore architecto. Consectetur, assumenda!'
        },
        {
            title: 'Titulo 5',
            date: new Date().getFullYear(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam recusandae possimus, vitae nihil libero quo delectus modi, nisi amet suscipit eaque voluptatem commodi praesentium consequuntur quaerat aliquam natus nostrum quidem! Ratione harum, dolorum nemo magni reiciendis tempore! Voluptatum natus, rerum quis iusto facere, id officia cupiditate quasi, vel architecto iste recusandae dignissimos maiores! Iste voluptatibus possimus nostrum harum optio eveniet voluptas blanditiis, ullam ad voluptates tempora? Eos similique sequi quaerat molestias! Minima pariatur error vitae doloremque inventore architecto animi sequi dolorum suscipit rerum? Ipsum cumque velit accusantium iusto. Totam ipsum dignissimos sequi culpa quos deserunt repellendus labore architecto. Consectetur, assumenda!'
        }

    ];
    articles.forEach((item, index) => {
        var article = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer más</a>
            </article>
        `;
        $('#posts').append(article);
    });
    }

    /* Theme section */
    var theme = $('#theme');
    $('#to-green').click(function(){
        theme.attr("href", "css/green.css");
    });
    $('#to-red').click(function(){
        theme.attr("href", "css/red.css");
    });
    $('#to-blue').click(function(){
        theme.attr("href", "css/blue.css");
    });

    /* Up to page section */
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 700);

        return false;
    });

    /* LocalStorage Login section */
    $('#login form').submit(function(){
        var form_name = $('#form_name').val();
        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_p = $('#about p');
        about_p.html("Estas en la pagina de " + "<strong>" + form_name + "</strong> ");
        about_p.append('<a href="#" id="logout">Cerrar sesión</a>')
        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    /* Acordeon section */
    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion();
    }

    /* Reloj section */
    if(window.location.href.indexOf('reloj') > -1){

        setInterval(() => {
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);     
    }

});