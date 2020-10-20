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
    const actualCws = parseInt(selectedCws);
    const actualCss = parseInt(selectedCss);
    const actualAws = parseInt(selectedAws);
    const actualAss = parseInt(selectedAss)

    console.log(actualCws);
    console.log(actualCss);
    console.log(actualAws);
    console.log(actualAss);

    const totalPrice = (actualCws + actualCss + actualAws + actualAss);
    console.log(totalPrice);

    alert("your order of " + totalPrice + "  has been recieved.Your total amount is " + totalPrice + "")

    
}