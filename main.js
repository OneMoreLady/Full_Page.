var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");

btn[0].onclick = function() {
    slide.style.transform = "translateX(0px)";
}
btn[1].onclick = function() {
    slide.style.transform = "translateX(-800px)";
}

$(function() {
    $(document).scroll(function() {
        var $nav = $('.nav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});