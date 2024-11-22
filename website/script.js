// Smooth scroll to the corresponding section on click of navigation buttons
document.querySelectorAll(".navigation-elements a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href"); // Get the href attribute (which is the section ID)
    const targetSection = document.querySelector(targetId); // Find the section with that ID

    // Get the height of the navbar
    const navbarHeight = document.querySelector(".navigation").offsetHeight;

    window.scrollTo({
      top: targetSection.offsetTop - navbarHeight + 1,
      behavior: "smooth",
    });
  });
});

// Smooth scroll to the diagnosis section when "Get free Diagnosis" button is clicked
document
  .querySelector(".intro-section-button")
  .addEventListener("click", () => {
    const diagnosisSection = document.querySelector("#diagnosis"); // Ensure the ID is correct here
    window.scrollTo({
      top: diagnosisSection.offsetTop,
      behavior: "smooth",
    });
  });

// NavBar color change on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navigation');
  const aboutSection = document.querySelector('.about-section');

  const aboutRect = aboutSection.getBoundingClientRect();
  const navRect = navbar.getBoundingClientRect();
  
  // Check if the .about-section is on screen
  if (navRect.bottom >= aboutRect.top) {
    navbar.style.backgroundColor = '#ffffff';
  } else {
    navbar.style.backgroundColor = '#d6f8d7';
  }
});


window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("scrolled"); // Add 'scrolled' class
  } else {
    navbar.classList.remove("scrolled"); // Remove 'scrolled' class
  }
});
