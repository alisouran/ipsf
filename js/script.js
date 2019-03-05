$(document).ready(function(){
	openMember();
	openNews();
	openSponsor();
	displayNewsNavBtn("#navBtnIPSF","#navBtnIPHSA","#navBtnCourse");
	owlCo();
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1) {
		  $("#header").addClass("header-scrolled fixed-top");
		  $("body").addClass("mt-5");
		} else {
		  $("#header").removeClass("header-scrolled fixed-top");
		  $("body").removeClass("mt-5");
		}
	  });
});


function owlCo() { 
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			}
		},
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true
	});
	$('.play').on('click',function(){
		owl.trigger('play.owl.autoplay',[2000])
	})
	$('.stop').on('click',function(){
		owl.trigger('stop.owl.autoplay')
	})
 }

function openMember(){
	$("#member").click(function (e) { 
		$("#hideNewsIcon").fadeOut();
		$("#hideNewsText").fadeOut();
		$("#hideMemberIcon").fadeOut();
		$("#hideMemberText").fadeOut();
		$("#hideSponsorIcon").fadeOut();
		$("#hideSponsorText").fadeOut();
		$("#mainSection").fadeOut();
	});
}
function openNews(){
	$("#news").click(function (e) { 
		$("#hideNewsIcon").fadeOut();
		$("#hideNewsText").fadeOut();
		$("#hideMemberIcon").fadeOut();
		$("#hideMemberText").fadeOut();
		$("#hideSponsorIcon").fadeOut();
		$("#hideSponsorText").fadeOut();
		$("#mainSection").fadeOut();
		displaySection("#newsSection");
		displayMainSection("#news_back","#newsSection");
	});
}
function openSponsor(){
	$("#sponsor").click(function (e) { 
		$("#hideNewsIcon").fadeOut();
		$("#hideNewsText").fadeOut();
		$("#hideMemberIcon").fadeOut();
		$("#hideMemberText").fadeOut();
		$("#hideSponsorIcon").fadeOut();
		$("#hideSponsorText").fadeOut();
		$("#mainSection").fadeOut();
		displaySection("#sponsorSection");
		displayMainSection("#sponsor_back","#sponsorSection");
	});
}

function displaySection(displaySectionId){
	$(displaySectionId).delay(500).fadeIn();
}


function displayMainSection(backId,displaySectionId){
	$(backId).click(function (e) {
		$(displaySectionId).fadeOut();
		$("#mainSection").delay(400).fadeIn();
		$("#hideNewsIcon").fadeIn();
		$("#hideNewsText").fadeIn();
		$("#hideMemberIcon").fadeIn();
		$("#hideMemberText").fadeIn();
		$("#hideSponsorIcon").fadeIn();
		$("#hideSponsorText").fadeIn();
	});
}



function displayNewsNavBtn(btnId1,btnId2,btnId3){
	$(btnId1).click(function(e){
		$("#newsNavContent1").delay(400).fadeIn();
		$("#newsNavContent4").delay(400).fadeIn();
		$("#newsNavContent2").fadeOut();
		$("#newsNavContent5").fadeOut();
		$("#newsNavContent3").fadeOut();
		$("#newsNavContent6").fadeOut();
	});
	$(btnId2).click(function(e){
		$("#newsNavContent1").fadeOut();
		$("#newsNavContent4").fadeOut();
		$("#newsNavContent2").delay(400).fadeIn();
		$("#newsNavContent5").delay(400).fadeIn();
		$("#newsNavContent3").fadeOut();
		$("#newsNavContent6").fadeOut();
	});
	$(btnId3).click(function(e){
		$("#newsNavContent1").fadeOut();
		$("#newsNavContent4").fadeOut();
		$("#newsNavContent2").fadeOut();
		$("#newsNavContent5").fadeOut();
		$("#newsNavContent3").delay(400).fadeIn();
		$("#newsNavContent6").delay(400).fadeIn();
	});
}
