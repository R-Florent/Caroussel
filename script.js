$(function(){  
  var swiper = new Swiper('.swiper-container', {
    loop:true,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,

      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    on: {
      init: function () {
        console.log('swiper initialized');
        let currentSlide = this.slides[1];
        console.log(currentSlide)
        let titre = $(currentSlide).data('titre');
        let btn = $(currentSlide).data('btn');
        let urlBtn = $(currentSlide).data('url');

        $('#slidetitre').text(titre);
        if (urlBtn) {
          $('#slidebtn').text(btn);
          $('#slidebtn').attr('href',urlBtn);
          $('#slidebtn').addClass('active');
        } else {
          $('#slidebtn').removeClass('active');
        }
      },
    },
  });


// avec annimations
  if(screen.width >= 800){
    swiper.on('slideChange', function() {
      // gsap.fromTo("#slidetitre",{x:50},{x:200});
      gsap.fromTo("#slidetitre", {y:0 , opacity: 0}, { y:-50, opacity: 1, ease:"elasitc.out (1,0.3)" });
      console.log('*** mySwiper.activeIndex', swiper.activeIndex);
      let currentIndex = swiper.activeIndex;
      let currentSlide = swiper.slides[currentIndex];
      console.log(screen.width);

      let titre = $(currentSlide).data('titre');
      let btn = $(currentSlide).data('btn');
      let urlBtn = $(currentSlide).data('url');

      console.log(titre,btn,urlBtn)
      $('#slidetitre').text(titre);
      
      if (urlBtn) {
        $('#slidebtn').text(btn);
        $('#slideurl').text(urlBtn);
        $('#slidebtn').addClass('active');
        }
      else{
        $('#slidebtn').removeClass('active');
      }


      // $('#slidebouton').attr('href', url);
      // console.log(document.getElementById("id01").innerHTML = "Tire 1");
      // let currentTitile = Object.assign(data-titre,)
      // element= document.querySelector(data-titre);
      // console.log(element)
    });
   }
  else{  // sans annimation   
    swiper.on('slideChange', function() {
      console.log('*** mySwiper.activeIndex', swiper.activeIndex);
      let currentIndex = swiper.activeIndex;
      let currentSlide = swiper.slides[currentIndex];
      let titre = $(currentSlide).data('titre');
      console.log(titre)
      $('#slidetitre').text(titre);
      console.log(screen.width);
      console.log(titre,btn,urlBtn)
      $('#slidetitre').text(titre);
        if (urlBtn) {
          $('#slidebtn').text(btn);
          $('#slideurl').text(urlBtn);
          $('#slidebtn').addClass('active');
          }
        else{
          $('#slidebtn').removeClass('active');
        }
    });
  } 
});


$('li').on('click', function(event){
  event.preventDefault();
  var index = $("li").index(event.currentTarget);
  slider.slide(index);
});

