document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  
  if (name && email && message) {
    document.getElementById("response-message").innerHTML = "Thank you for your message, " + name + "! We will get back to you shortly.";
    document.getElementById("contact-form").reset();
  } else {
    document.getElementById("response-message").innerHTML = "Please fill out all fields.";
  }
});
