$(document).ready(function() {
	// Nav Click ID
	$("a[href^='#']").click(function(e) {
	e.preventDefault();
	var position = $($(this).attr("href")).offset().top - 60;

	$("body, html").animate({
		scrollTop: position
	}, 500);
	});
	// Scroll Navbar
	$(function () {
  		$(document).scroll(function () {
	 	 var $nav = $(".navbar");
	 	 $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		});
	});
	// Galeri
		$(function(){
			var $gallery = $('.gallery a').simpleLightbox();
	
			$gallery.on('show.simplelightbox', function(){
				console.log('Requested for showing');
			})
			.on('shown.simplelightbox', function(){
				console.log('Shown');
			})
			.on('close.simplelightbox', function(){
				console.log('Requested for closing');
			})
			.on('closed.simplelightbox', function(){
				console.log('Closed');
			})
			.on('change.simplelightbox', function(){
				console.log('Requested for change');
			})
			.on('next.simplelightbox', function(){
				console.log('Requested for next');
			})
			.on('prev.simplelightbox', function(){
				console.log('Requested for prev');
			})
			.on('nextImageLoaded.simplelightbox', function(){
				console.log('Next image loaded');
			})
			.on('prevImageLoaded.simplelightbox', function(){
				console.log('Prev image loaded');
			})
			.on('changed.simplelightbox', function(){
				console.log('Image changed');
			})
			.on('nextDone.simplelightbox', function(){
				console.log('Image changed to next');
			})
			.on('prevDone.simplelightbox', function(){
				console.log('Image changed to prev');
			})
			.on('error.simplelightbox', function(e){
				console.log('No image found, go to the next/prev');
				console.log(e);
			});
		});
	
	// COUNT STATS
	var a = 0;
		$(window).scroll(function() {
				var oTop = $('#counter').offset().top - window.innerHeight;
				  if (a == 0 && $(window).scrollTop() > oTop) {
				    $('.counter-value').each(function() {
				      var $this = $(this),
				        countTo = $this.attr('data-count');
				      $({
				        countNum: $this.text()
				      }).animate({
				          countNum: countTo
				        },
				
				        {
				
				          duration: 7000,
				          easing: 'swing',
				          step: function() {
				            $this.text(Math.floor(this.countNum));
				          },
				          complete: function() {
				            $this.text(this.countNum);
				            //alert('finished');
				          }
				
				        });
				    });
				    a = 1;
				  }
				
				});	

	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});

	// scroll fade in
	$('.fadeInStart').animate({
		'opacity':'1'
	},1000);
	$(function() {
	    $(window).scroll( function(){
	       
	        $('.page-section').each( function(i){
	            
	            var top_of_object = $(this).position().top;
	            var bottom_of_window = $(window).scrollTop() + $(window).height();
	            
	            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
	            var bottom_of_window = bottom_of_window - 100;
	          
	            if( bottom_of_window > top_of_object ){
	                
	                $(this).animate({'opacity':'1'},1000);
	                    
	            }
	        }); 
	    
	    });
	});

});
