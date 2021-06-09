/*========================================== MASTER JAVASCRIPT ===================================================================

	Project     :	BUSINESS TEMPLATES
	Version     :	1.0
	Last Change : 	06/05/2017
	Primary Use :   BUSINESS TEMPLATES

=================================================================================================================================*/

	$(document).on('ready', function() {
		"use strict"; //Start of Use Strict
		var menu_bar = $('.navbar-default');
		var menu_li = $('.navbar-default li a');
		var collapse = $('.navbar-collapse');
		var navbar_header=$('.navbar_header button');
		var top_nav = $('#top-nav');
		
		//AFTER SCROLL MENU CREATED,MENU BGCOLOR AND TEXT COLOR
		if(top_nav.length) {
			var x = top_nav.offset().top;
			if (x > 50) {
				top_nav.fadeIn();
			}
			else {
				top_nav.fadeOut();
			}
			$(document).on('scroll',function() {
				var y = $(this).scrollTop();
					if (y > 50) {
						top_nav.fadeIn();
					}
					else	{
						top_nav.fadeOut();
					}
			});
		}
		//RESPONSIVE MENU SHOW AND HIDE FUNCTION
		if(menu_li.length) {
			menu_li.on("click", function(event) {
				collapse.slideToggle();
			});
			$('.navbar-default .navbar-toggle').on("click",function(e) {
				collapse.slideToggle();
			});
		}
		
		//MENU BAR SMOOTH SCROLLING FUNCTION
		var menu_list=$('.navbar-nav');
		if(menu_list.length) {
			menu_list.on( "click", ".pagescroll", function( event ) {					
					event.preventDefault();	
					var hash_tag= $(this).attr('href');					
					if($(hash_tag).length) {
                            $('html, body').animate({
                            scrollTop: $(hash_tag).offset().top - 50
                        }, 2000);
                    } 
				return false;
			});	
		}
		
		//COUNTER
		var counter=$('.count');
			if(counter.length) {
				counter.counterUp({
					delay: 10,
					time: 1000
				});
			}
			
		//GALLERY POPUP
		 var gallery = $('.popup-gallery');
			if (gallery.length) {
			$('.popup-gallery').magnificPopup({
				delegate: 'a',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function(item) {
						return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
					}
				}
			});
		}
		//CONTACT FORM VALIDATION	
		if ($('#contact-form-1').length) {
			$('#contact-form-1').each(function(){
				$(this).validate({			
					errorClass: 'error',
					submitHandler: function(form){
						$.ajax({
							type: "POST",
							url:"mail/mail.php",
							data: $(form).serialize(),
							success: function(data) {							
							   if(data){
								   $('#sucessMessage').html('Mail Sent Successfully !');
								   $('#sucessMessage').show();
								   $('#sucessMessage').delay(3000).fadeOut();
							   }
							   else {
									$('#failMessage').html(data);
									$('#failMessage').show();
									$('#failMessage').delay(3000).fadeOut();
									}
							},
							error: function(XMLHttpRequest, textStatus, errorThrown) {
							   $('#failMessage').html(textStatus);
							   $('#failMessage').show();
							   $('#failMessage').delay(3000).fadeOut();
							 }
						});
					}				
				});
			});
		}	
		return false;
		// End of use strict
	});