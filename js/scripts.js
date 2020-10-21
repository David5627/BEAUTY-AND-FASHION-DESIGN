function myFunction() {
    event.preventDefault
    var name = document.getElementById("name").value;
    var email =document.getElementById("email").value;
    var Feedback =document.getElementById("Feedback").value;

    alert(name + " Your feedback has been received and will reach out to you through" + email);
  };
  