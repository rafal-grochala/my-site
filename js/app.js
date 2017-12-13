// go-top button

    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $('.scroll-top').fadeIn(200);
            } else {
                $('.scroll-top').fadeOut(200);
            }
        });
        $('.scroll-top').click(function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 300);
        });
    });