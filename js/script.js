$(document).ready(function(){
	openMember();
	openNews();
	openSponsor();
});

function openMember(){
	$("#member").click(function (e) { 
		$("#hideNewsIcon").toggle('slide');
		$("#hideNewsText").slideUp(500);
		$("#hideMemberIcon").toggle('slide');
		$("#hideMemberText").slideUp(500);
		$("#hideSponsorIcon").toggle('slide');
		$("#hideSponsorText").slideUp(500);
		$("#mainSection").hide();
	});
}
function openNews(){
	$("#news").click(function (e) { 
		$("#hideNewsIcon").toggle('slide');
		$("#hideNewsText").slideUp(500);
		$("#hideMemberIcon").toggle('slide');
		$("#hideMemberText").slideUp(500);
		$("#hideSponsorIcon").toggle('slide');
		$("#hideSponsorText").slideUp(500);
		$("#mainSection").delay(500).hide('slow');
		displayNewsSection();
	});
}
function openSponsor(){
	$("#sponsor").click(function (e) { 
		$("#hideNewsIcon").toggle('slide');
		$("#hideNewsText").slideUp(500);
		$("#hideMemberIcon").toggle('slide');
		$("#hideMemberText").slideUp(500);
		$("#hideSponsorIcon").toggle('slide');
		$("#hideSponsorText").slideUp(500);
		$("#mainSection").hide();
	});
}

function displayNewsSection(){
	$("#newsSection").delay(500).show('slow');
}



