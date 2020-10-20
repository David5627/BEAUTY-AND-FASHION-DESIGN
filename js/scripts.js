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

    alert("your order of " + totalPrice + "  has been recieved.Your total amount is " + totalPrice + "")

    
}