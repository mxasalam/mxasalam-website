document.addEventListener("DOMContentLoaded", function() {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach(function(button) {
    button.addEventListener("click", function() {
      const content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});
