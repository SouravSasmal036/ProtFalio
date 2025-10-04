document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("message").value.trim();

  if(!name || !email || !msg){
    alert("Please fill all fields!");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!emailPattern.test(email)){
    alert("Enter a valid email!");
    return;
  }

  alert("Message sent successfully 🎉");
  this.reset();
});
