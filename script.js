function startExperience() {
  const landing = document.getElementById("landing");
  const main = document.getElementById("mainContent");
  const music = document.getElementById("bgMusic");

  // Completely remove landing
  if (landing) {
    landing.remove();
  }

  // Show main content
  if (main) {
    main.style.display = "block";
  }

  // Play music
  if (music) {
    music.play().catch(() => {});
  }

  // Trigger image animation once page is shown
  revealImages();
}

// Scroll animation for images
function revealImages() {
  const images = document.querySelectorAll(".image-container img");

  images.forEach(function (img) {
    const position = img.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      img.classList.add("show");
    }
  });
}

// Run on scroll
window.addEventListener("scroll", revealImages);

// Run once on load (VERY IMPORTANT)
window.addEventListener("load", revealImages);