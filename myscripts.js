function openNav() {
    document.getElementById("mySidenav").style.left = "0px";
	document.getElementById("board").style.marginLeft = "200px";
	document.getElementById("board").style.transition = "0.3s";
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-200px";
	document.getElementById("board").style.marginLeft = "50px";
	document.getElementById("board").style.transition = "0.3s";
}

function openNavR() {
    document.getElementById("mySidenavR").style.right = "0px";
	document.getElementById("board").style.marginRight = "190px";
}

function closeNavR() {
	document.getElementById("mySidenavR").style.right = "-200px";
	document.getElementById("board").style.marginRight = "40px";
}



// Get the modal
var modalAbout = document.getElementById('myModalAbout');
var modalContact = document.getElementById('myModalContact');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var about = document.getElementById('about');
var contact = document.getElementById('contact');
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");

about.onclick = function(){
    modalAbout.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;
	$("html").css({"overflow-y":"scroll"});
}

contact.onclick = function(){
    modalContact.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;	
	$("html").css({"overflow":"hidden"});
}

// When the user clicks on <span> (x), close the modal
function closeModal() { 
  modalAbout.style.display = "none";
  modalContact.style.display = "none";
  //document.body.style.overflow = "scroll";	//show background scroll bar after pushing close button of an image pop up
  $("html").css({"overflow":"scroll"});
}
