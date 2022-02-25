var btn = $('.btn');

btn.on('click', function() {
  $(this).toggleClass('activerr');
  $(this).toggleClass('not-active');
  $('.menu-flex').toggleClass('active2');
  $('body').toggleClass('no-active');
  $('nav ul li').toggleClass('active');
  $('nav ul li a').toggleClass('active');
  $('.body').requestFullscreen();
}); 


$('header').click(function(){
if($('.menu-flex').hasClass('active2')){
$('.menu-flex').removeClass('active2');
$(btn).toggleClass('activerr');
$(btn).toggleClass('not-active');
$('body').removeClass('no-active');
$('nav ul li').removeClass('active');
$('nav ul li a').removeClass('active');
}
})


$('.opened-accordion').hide();
$('#ac1').click(function(){
    $('#op1').toggle(200);
    $('#ac1 i').toggleClass('active')
})

$('#ac2').click(function(){
  $('#op2').toggle(200);
  $('#ac2 i').toggleClass('active')
})

$('#ac3').click(function(){
  $('#op3').toggle(200);
  $('#ac3 i').toggleClass('active')
})

$('#ac4').click(function(){
  $('#op4').toggle(200);
  $('#ac4 i').toggleClass('active')
})




$('#prb1').click(function(){
  $('#pr1').toggleClass('active');
  $(this).toggleClass('active');
  $('#prb2').removeClass('active');
  $('#prb3').removeClass('active');
  $('#pr2').removeClass('active');
  $('#pr3').removeClass('active');
})
$('#prb2').click(function(){
  $('#pr2').toggleClass('active');
  $(this).toggleClass('active');
  $('#prb1').removeClass('active');
  $('#prb3').removeClass('active');
  $('#pr3').removeClass('active');
  $('#pr1').removeClass('active'); 
})
$('#prb3').click(function(){
  $('#pr3').toggleClass('active');
  $(this).toggleClass('active');
  $('#prb2').removeClass('active');
  $('#prb1').removeClass('active');
  $('#pr2').removeClass('active');
  $('#pr1').removeClass('active');
})



$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 10) {
      $("nav").addClass("active");
      $(".menu-flex").addClass("active");
      $(".phone img").addClass("active");
      $(".phone").addClass("active");
      $(".header-info").addClass("active");
  }
  else{
      $("nav").removeClass("active");
      $(".phone img").removeClass("active");
      $(".menu-flex").removeClass("active");
      $(".phone").removeClass("active");
      $(".header-info").removeClass("active");
  }
});
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $(".header h1").addClass("active");
    $(".header-info p").addClass("active");
    $('.for-parralax-video').removeClass('layer');
    $('.for-parralax-video').addClass('layer2');
  }
  else{
    $(".header h1").removeClass("active");
    $(".header-info p").removeClass("active");
    $('.for-parralax-video').removeClass('layer2');
    $('.for-parralax-video').addClass('layer');
  }
  if (scroll >= 600) {
    $(".respo").addClass("active");
    $(".phone").addClass("active2");
  }
  else{
    $(".respo").removeClass("active");
    $(".phone").removeClass("active2");
  }
});

$(function(){

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  items:3,
  autoplay:true,
  autoplayTimeout:7000,
  autoplayHoverPause:true,
  nav: false,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:3
    }
}
});


})




const tween = new TimelineLite();

tween
.fromTo(".phone", 1, {width: "100%",}, {width: "230px", margin: "100px 0", height: "460px", ease: Power1.easeInOut})
.to(".phone", 1, {x:"0%", ease: Power1.easeInOut})
.fromTo(".hh", 1, {x:"100%",}, {x:"0%", ease: Power1.easeInOut})
const controller = new ScrollMagic.Controller();


const scene = new ScrollMagic.Scene({
triggerElement: ".animationn",
duration: 1000,
triggerHook: 0
})



.setTween(tween)
.setPin(".animationn")
.addTo(controller)














// const tween2 = new TimelineLite();

// tween2


//     .to('.div', 5, {
//     ease: Power1.easeInOut, scale: 1, width: "200px", height: "600px"
//     })
//     .from('.left2', 5, {
//       ease: Power1.easeInOut, scale: 1, opacity: 1, width: "100%"
//       })
//     .to('.left2', 5, {
//       ease: Power1.easeInOut, scale: 1, opacity: 0, width: "0px", height: "0px"
//       })



// const scene2 = new ScrollMagic.Scene({
// triggerElement: ".ff",
// duration: 400,
// triggerHook: 0.1
// })

// .addIndicators()

// .setTween(tween2)
// .setPin(".ff")
// .addTo(controller)





// const tween3 = new TimelineLite();

// tween3


//     .to('.paper', 5, {
//     ease: Power1.easeInOut, y: "-100%"
//     })



// const scene3 = new ScrollMagic.Scene({
// triggerElement: ".hhg",
// duration: 600,
// triggerHook: 0.2
// })


// .setTween(tween3)
// .setPin(".hhg")
// .addTo(controller)











const tween4 = new TimelineLite();

tween4


    .to('.line2', 0.3, {
    ease: Power1.easeInOut, width: "100%"
    })
    .to('.line3', 1, {
      ease: Power1.easeInOut, height: "100%"
      })
      .to('.line', 0.3, {
        ease: Power1.easeInOut, width: "80px"
        })


        const scene4 = new ScrollMagic.Scene({
          triggerElement: ".fg",
          duration: 400,
          triggerHook: 0.1
          })
          
          
          .setTween(tween4)
          .setPin(".fg")
          .addTo(controller)




          const tween5 = new TimelineLite();

tween5


    .to('.slide2', 0.3, {
    ease: Power1.easeInOut, y: "-90%"
    }, '-=6')
    .to('.slide3', 1, {
      ease: Power1.easeInOut, y: "-180%"
      }, '-=6')


        const scene5 = new ScrollMagic.Scene({
          triggerElement: ".rocky",
          duration: 2000,
          triggerHook: 0
          })
          
          
          .setTween(tween5)
          .setPin(".rocky")
          .addTo(controller)











          var elem = document.getElementById("body");
          function openFullscreen() {
            if (elem.requestFullscreen) {
              elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
              elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE11 */
              elem.msRequestFullscreen();
            }
          }  
