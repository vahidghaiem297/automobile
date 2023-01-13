
// $(document).ready(function () {
// 	$("#slick-list1").slick({
// 		slidesToShow: 2,
// 		slidesToScroll: 1,
// 		arrows: false,
//     dots:false,
//     rtl:true,
// 		infinite: true,
		
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
// 	});
// 	$("#prev-btn1").click(function () {
// 		$("#slick-list1").slick("slickPrev");
// 	});

// 	$("#next-btn1").click(function () {
// 		$("#slick-list1").slick("slickNext");
// 	});
	

// });
// $(document).ready(function () {
// 	$("#slick-list2").slick({
// 		slidesToShow: 2,
// 		slidesToScroll: 1,
// 		arrows: false,
//     dots:false,
//     rtl:true,
// 		infinite: true,
		
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
// 	});
// 	$("#prev-btn2").click(function () {
// 		$("#slick-list2").slick("slickPrev");
// 	});

// 	$("#next-btn2").click(function () {
// 		$("#slick-list2").slick("slickNext");
// 	});
	

// });
// $(document).ready(function () {
// 	$("#slick-list3").slick({
// 		slidesToShow: 2,
// 		slidesToScroll: 1,
// 		arrows: false,
//     dots:false,
//     rtl:true,
// 		infinite: true,
		
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
// 	});
// 	$("#prev-btn3").click(function () {
// 		$("#slick-list3").slick("slickPrev");
// 	});

// 	$("#next-btn3").click(function () {
// 		$("#slick-list3").slick("slickNext");
// 	});
	

// });


$(document).ready(function () {
	$(".slick-list").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
    dots:true,
    dots:false,
		infinite: false,
		autoplay: false,
    rtl:true,
	});
	$(".prev-btn").click(function () {
		$(".slick-list").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".slick-list").slick("slickNext");
	});
	$(".prev-btn").addClass("slick-disabled");
	$(".slick-list").on("afterChange", function () {
		if ($(".slick-prev").hasClass("slick-disabled")) {
			$(".prev-btn").addClass("slick-disabled");
		} else {
			$(".prev-btn").removeClass("slick-disabled");
		}
		if ($(".slick-next").hasClass("slick-disabled")) {
			$(".next-btn").addClass("slick-disabled");
		} else {
			$(".next-btn").removeClass("slick-disabled");
		}
	});
});

$(document).ready(function() {
  var $slider = $('#particles');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
  });
  
  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400
  });  
});

