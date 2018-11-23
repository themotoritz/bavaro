function openDropDown() {
	var a = document.getElementById("dropDown");
	var b = document.getElementById("TopNavFolio");
    if (a.style.display === "none") {
        a.style.display = "block";
		a.style.top = "220px";
		b.style.height = "150px";
/* 		document.getElementById("board").style.marginTop = "350px";*/
    } else {
        a.style.display = "none";
		a.style.top = "-500px";
		b.style.height = "50px";
		c.sytle.top = "250px";
    }
}

function openTopNav() {
	document.getElementById("closeBtnDivTopNav").style.top = "-20px";
	document.getElementById("TopNavLinks").style.top = "0px";
	document.getElementById("TopNavFolio").style.top = "110px";
	document.getElementById("board").style.marginTop = "190px";
	document.getElementById("board").style.transition = "0.3s";
	document.getElementById("menubtnTop").style.display = "none";
	document.getElementById("dropDown").style.display = "none";
}

function closeTopNav() {
	document.getElementById("closeBtnDivTopNav").style.top = "-130px";
	document.getElementById("TopNavLinks").style.top = "-120px";
	document.getElementById("TopNavFolio").style.top = "-120px";
	document.getElementById("board").style.marginTop = "0px";
	document.getElementById("board").style.transition = "0.3s";
	document.getElementById("menubtnTop").style.display = "block";
	document.getElementById("dropDown").style.display = "none";
	document.getElementById("TopNavFolio").style.height = "50px";
}

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
	document.getElementById("board").style.transition = "0.3s";
}

function closeNavR() {
	document.getElementById("mySidenavR").style.right = "-200px";
	document.getElementById("board").style.marginRight = "40px";
	document.getElementById("board").style.transition = "0.3s";
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
	modalContact.style.display = "none";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;
	$("html").css({"overflow-y":"scroll"});
}

contact.onclick = function(){
    modalContact.style.display = "block";
	modalAbout.style.display = "none";
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


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

$(document).on('click', function(event) {
	var x = document.getElementById("myModalAbout");
	var container = $(".linkAbout");
	if (!container.is(event.target) && container.has(event.target).length === 0) 
	 {
	  if (x.style.display === "block") {
			x.style.display = "none";
		} 
	} 
});

$(document).on('click', function(event) {
	var x = document.getElementById("myModalContact");
	var container = $(".linkContact");
	if (!container.is(event.target) && container.has(event.target).length === 0) 
	 {
	  if (x.style.display === "block") {
			x.style.display = "none";
		} 
	} 
});