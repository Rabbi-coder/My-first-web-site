$(".typed").typed({
    strings: ["Designer.", "Developer.", "Photographer."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function () { },
    // starting callback function before each string
    preStringTyped: function () { },
    //callback for every typed string
    onStringTyped: function () { },
    // callback for reset
    resetCallback: function () { }
});
// type part end


new WOW().init();

// wow part end here

const btn = document
    .querySelector('.read-more-btn');

const text = document
    .querySelector('.card__read-more');

const cardHolder = document
    .querySelector('.card-holder');

cardHolder
    .addEventListener('click', e => {

        const current = e.target;

        const isReadMoreBtn = current.className.includes('read-more-btn');

        if (!isReadMoreBtn)
            return;

        const currentText = e.target.parentNode.querySelector('.card__read-more');

        currentText.classList.toggle('card__read-more--open');

        current.textContent = current.textContent.includes('Read More...') ? 'Read Less...' : 'Read More...';

    });

// service part end here


var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector('.right-slide');
var prevSlide=document.querySelector('.left-slide');
var index = 0;

var totalSlides=slides.length;

nextSlide.onclick=function(){
	next("next");
}
prevSlide.onclick=function(){
	next("prev");
}

function next(direction){
	if (direction=="next") {
		index++;
		if (index==totalSlides){
			index=0;
		}
	}else{
		if(index==0){
			index=totalSlides-1;
		}else{
			index--;
		}
	}

	for(i=0;i<slides.length;i++){
		slides[i].classList.remove("active");
	}

	slides[index].classList.add("active");
}
// work slider end here

$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
      items: 3,
      itemsDesktop:[1000,3],
      itemsDesktopSmall:[979,2],
      itemsTablet:[768, 2],
      itemsMobile:[650, 1],
      pagination: true,
      autoPlay: true
    });
  });
//   testimonial carousal eand here