$(document).ready(function () {
    // таймер
let date = new Date('Jun 20 2021 00:00:00');

function counts(){
    let now = new Date();
    gap = date - now;


    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60 ) % 24;
    let minutes = Math.floor(gap / 1000 / 60 ) % 60;
    let seconds = Math.floor(gap / 1000 ) % 60;

if(gap < 0) {
    days = days + 7;
    hours = hours + 24;
    minutes = minutes + 60;
    seconds = seconds + 60;
}

    document.getElementById('d').innerText = days;
    document.getElementById('h').innerText = hours;
    document.getElementById('m').innerText = minutes;
    document.getElementById('s').innerText = seconds;
}
counts();

setInterval(counts, 1000);
// таймер


// слайдер с отзывами
$(".testimonials-item").not('.active').hide();


$(".arrow-next").click(function() {
        $(".testimonials-item.active:first").next().slideToggle().addClass("active");
        $(".testimonials-item:visible").prev().slideToggle().removeClass("active");
        $(".testimonials-item").not(".active").hide();
    
    if ($('.testimonials-items-container .testimonials-item').first().hasClass("active")) 
        {}
    else{
            $(".arrow-prev").addClass("arrow-active");
        }
         
    if ($('.testimonials-items-container .testimonials-item').last().hasClass("active")) {
            $(".arrow-next").removeClass("arrow-active");
        }
});


$(".arrow-prev").click(function() {
    $(".testimonials-item.active:first").prev().slideToggle().addClass("active");
    $(".testimonials-item:visible").next().slideToggle().removeClass("active");
    $(".testimonials-item").not(".active").hide();

if ($('.testimonials-items-container .testimonials-item').first().hasClass("active")) 
    {
        $(".arrow-prev").removeClass("arrow-active");
    }
else{
        $(".arrow-prev").addClass("arrow-active");
    }
     
if ($('.testimonials-items-container .testimonials-item').last().hasClass("active")) 
    {}
else {
    $(".arrow-next").addClass("arrow-active");
}
});

});
