const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
});
 
const form = document.getElementById("my-form");
  const status = document.getElementById("status-message");

  form.addEventListener("submit", function(event) {
    event.preventDefault();     
    const data = new FormData(form);
    
    status.innerHTML = "Sending...";

    fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        status.innerHTML = "Success! Your message has been sent.";
        form.reset(); // Clear the form fields
      } else {
        status.innerHTML = "Oops! There was a problem sending your message.";
      }
    })
    .catch(error => {
      status.innerHTML = "Oops! There was a problem sending your message.";
    });
  });
