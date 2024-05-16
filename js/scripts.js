//fb-button
!function(e,n,t){var o,c=e.getElementsByTagName(n)[0];e.getElementById(t)||(o=e.createElement(n),o.id=t,o.src="//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8",c.parentNode.insertBefore(o,c))}(document,"script","facebook-jssdk");

//twitter-button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

//google maps
var map;
  function initMap() {
  	var coordinates = {lat: 60.3880471, lng: 25.6960012}
    map = new google.maps.Map(document.getElementById('map'), {
      center: coordinates,
      zoom: 12
    });

    var marker = new google.maps.Marker({
    	position: coordinates,
    	map: map,
    	draggable: true,
    	animation: google.maps.Animation.DROP,  	
    	title: 'Porvoo area!'
    });

  	marker.addListener('click', toggleBounce);

		function toggleBounce() {
  		if (marker.getAnimation() !== null) {
    	marker.setAnimation(null);
  	} else {
   	 marker.setAnimation(google.maps.Animation.BOUNCE);
  	}  	    
  }
};


//after page has loaded we execute these.
$(document).ready(function(){
	//visual changes
	//tooltips
  $(function(){$("#item1").tooltip()});
  $(function(){$("#item2").tooltip()});
  $(function(){$('[data-toggle="tooltip"]').tooltip()});

  //css element changes
  $('#phone-number').css("background-color", "lavender");
  $('#message').css("background-color", "lavender");

  // work section 
	for(var i = 0; i < works.length; ++i){
  	$("#work-list").append("\
    	<div class='col-xs-12 col-sm-6 col-lg-4'>\
    	  <a href='" + works[i].url +"' class='work-img scroll'>\
      		<img class='img-responsive image-square' src='" + works[i].picture + "'>\
      		<span class='info'><p class='project-title'>" + works[i].title + "</p></span>\
    		</a>\
    	</div>\
  	");

  	var images = $('#work-list img');
  	if (i%2 === 0) {
  		$(images[i]).css("border", "2px dashed #1de9b6");
  	} else {
  		$(images[i]).css("border", "2px dashed lavender");
  	}
	};

	//work section mouse enter and leave listeners
	$('.work-img').mouseenter(function(){
		$('.info', this).show();
	}).mouseleave(function(){
		$('.info', this).hide();
	});

  //button listeners
  $('#submit').on("click", function(){
  	var name = $('#name').val();
  	var email = $('#email').val();
  	var phoneNumber = $('#phone-number').val();
  	var comment = $('#message').val();

  	if(name) {
  		$('#visible-name').html(name);
  		$('#visible-name').css("background", "rgba(255, 255, 255, 0.5)");
  		$('#visible-name').css("padding", "10px");
  		$('#name').hide();
  	}

  	if(email) {
  		$('#visible-email').html(email);
  		$('#visible-email').css("background", "rgba(255, 255, 255, 0.5)");
  		$('#visible-email').css("padding", "10px");
  		$('#email').hide();		
  	}

  	if(phoneNumber) {
  		$('#visible-phone-number').html(phoneNumber);
  		$('#visible-phone-number').css("background", "rgba(255, 255, 255, 0.5)");
  		$('#visible-phone-number').css("padding", "10px");
  		$('#phone-number').hide();  		
  	}

  	if(comment.length >= 10) {
			$('#visible-comment').html(comment);
			$('#visible-comment').css("background", "rgba(255, 255, 255, 0.5)");
			$('#visible-comment').css("padding", "10px");
			$('#message').hide();
		}
		else {
			$('#message').css("border", "solid 1px red");
		} 
  });	

 	//letter calculator
 	$('#message').on("keyup", function(){
		var charCount = $("#message").val().length;
		console.log("A keyup happened. Current character count is: " + charCount);
 		$('#char-count').html("Message length: " + charCount + " characters.");

 		if (charCount > 49) {
 			$('#char-count').css("color", "red");
 			console.log("Charcount is over 49: " + charCount);
 		} else {
  		$('#char-count').css("color", "black")			
 		}
 	});

  //stellar
	$.stellar({verticalScrolling:!0,verticalOffset:0,responsive:!0});

  //smooth scrolling for navbar
  var $root=$("html, body");
  $(".navbar-nav a").click(function(){
  	var o=$.attr(this,"href");
  	return $root.animate({
  		scrollTop:$(o).offset().top},
  		500,
  		function(){
  			window.location.hash=o}),!1
  });
  //smooth scrolling for other scrolling
  var $root=$("html, body");
  $(".scroll").click(function(){
  	var o=$.attr(this,"href");
  	return $root.animate({
  		scrollTop:$(o).offset().top},
  		500,
  		function(){
  			window.location.hash=o}),!1
  });

});