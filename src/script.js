const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
});
