
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 1500); 
  }
  function myFunction() {
    event.preventDefault
    var name = document.getElementById("name").value;
    var email =document.getElementById("email").value;
    var Feedback =document.getElementById("Feedback").value;

    alert(name + " Your feedback has been received and will reach out to you through" + email);
  };

$(document).ready(function () {
    $("#final").click(function () {
        $("#me").hide();
        $("#us").show();
    });
});

function myButton(){
    event.preventDefault();
    const selectedCws = document.getElementById("fashion-size").value;
    const selectedCss =document.getElementById("children-shoe-size").value;
    const selectedAws = document.getElementById("Adult-wear-size").value;
    const selectedAss = document.getElementById("Adult-shoe-size").value;
    const selectCws = parseInt(selectedCws);
    const selectCss = parseInt(selectedCss);
    const selectAws = parseInt(selectedAws);
    const selectAss = parseInt(selectedAss)

    console.log(selectCws);
    console.log(selectCss);
    console.log(selectAws);
    console.log(selectAss);

    const totalPrice = (selectCws + selectCss + selectAws + selectAss);
    console.log(totalPrice);

    alert("your order of " + totalPrice + "  has been recieved. " + " .Please click ok to make delivery")

    
}

$(document).ready(function () {
    $("#final-order").click(function () {
        $("#us").hide();
        $("#delivery").show();

        
    });

    $("#fnl").click(function () {
        $("#delivery").hide();
        $("#me").show();

        
    });

});

function maFunction(){
    event.preventDefault();
    const selectCwf = document.getElementById("micah").value;
    const selectCwfs = document.getElementById("pist").value;
    const selectAwf =document.getElementById("picah").value;
    const selectAwfs = document.getElementById("kajol").value;




    alert("you have selected " + ""+ selectCwf +", "+ selectCwfs +", "+ selectAwf +", "+ selectAwfs)
}

function myPutton(){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var location = document.getElementById("lct").value;
    alert(name + " your order of has been recieved and will be delivered at " + location + " within a short period of time or we will email you through " + email)
}
