function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  var surname = document.forms["contactForm"]["surname"].value;
  var object = document.forms["contactForm"]["object"].value;
  var message = document.forms["contactForm"]["message"].value;
  if (name == "" || surname == "" || object == "" || message == "") {
    alert("All fields are required.");
    return false;
  }
  return true;
}