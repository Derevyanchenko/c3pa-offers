$(document).ready(function(){
  
   $(".viewOffers").on("click", function (event) {
  
       //отменяем стандартную обработку нажатия по ссылке
  
       event.preventDefault();
  
  
  
       //забираем идентификатор бока с атрибута href
  
       var id  = $(this).attr('href'),
  
  
  
       //узнаем высоту от начала страницы до блока на который ссылается якорь
  
           top = $(id).offset().top;
  
        
  
       //анимируем переход на расстояние - top за 1500 мс
  
       $('body,html').animate({scrollTop: top}, 500);
  
   });


   $('.blogOffers__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    // fade: true,
    // autoplay: 3000,
    // cssEase: 'linear',
    prevArrow: $(".blogOffers__slider-prev"),
    nextArrow: $(".blogOffers__slider-next"),
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      },
      {
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      }
    ]
  }); 
  
  });
  