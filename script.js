/*const form = document.getElementById('form')
const sendMail = document.getElementById('emailA')

function hadleSendEmail(event){
    event.preventDefault()
    const fd = new FormData(this)

    sendMail.setAttribute(
        'href',
        `mailTo:emibarto@live.com.ar?subject=${fd.get('subject')}&body=${fd.get('message')}`
    )
    
    sendMail.click()
}
form.addEventListener('submit', hadleSendEmail)*/


$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 0){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    })
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    var typed = new Typed(".typing", {
        strings: ["Front-End Developer", "Back-End Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav: false
            },
            1000:{
                items:3,
                nav: false
            }
        }
    })
})