function toggleMenu(icon) {
    icon.classList.toggle("change"); // burger animation
    document.getElementById("menu").classList.toggle("show"); // menu dropdown
  }
  
  function scrollToAbout() {
    document.getElementById("about-me").scrollIntoView({ behavior: "smooth" });
  }
  
