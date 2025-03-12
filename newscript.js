function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Please fill out the information");
      return false;
    }
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}