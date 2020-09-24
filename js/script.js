
$(document).ready(function(){

    
    // owl-carousel for testimonial
    
    $('#services-carousel').owlCarousel({
        items:2,
        loop:true,
        margin:10,
        autoplay:true,
        autoplaySpeed:1000,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
    

    $('#testi-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplaySpeed:1000,
        nav:false,
        dots:false,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
    // aos instance
    AOS.init();
    
});

jQuery(document).ready(function()
{
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
   