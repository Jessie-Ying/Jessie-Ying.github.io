$(document).ready(function() {
$("#next").click(function(){
    var mar= parseInt($('#gallery-film').css('margin-left').replace("px", ""));
    if (mar === -600) {
      return false;
    } else {
      $('#gallery-film').css('margin-left', mar-300);
    }
  });


    $("#prev").click(function(){
    var mar= parseInt($('#gallery-film').css('margin-left').replace("px", ""));
    if (mar === 0) {
      return false;
    } else {
      $('#gallery-film').css('margin-left', mar+300);
  }
  });

$("a").click(function() {
	$('html, body').animate({
	scrollTop: $( $.attr(this, 'href')).offset().top
	}, 900);
});

$("#nametext").hover(function() {
	$("#name").show();
});

$("#nametext").mouseout(function() {
	$("#name").hide();
});

$("#flavortext").hover(function() {
	$("#flavor").show();
});

$("#flavortext").mouseout(function() {
	$("#flavor").hide();
});

$("#locationtext").hover(function() {
	$("#location").show();
});

$("#locationtext").mouseout(function() {
	$("#location").hide();
});

$("#pricetext").hover(function() {
	$("#price").show();
});

$("#pricetext").mouseout(function() {
	$("#price").hide();
});

$("#commenttext").hover(function() {
	$("#comment").show();
});

$("#commenttext").mouseout(function() {
	$("#comment").hide();
});

function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
});
