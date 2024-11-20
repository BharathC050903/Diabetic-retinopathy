// Smooth scroll to the corresponding section on click of navigation buttons
document.querySelectorAll(".navigation-elements a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href"); // Get the href attribute (which is the section ID)
    const targetSection = document.querySelector(targetId); // Find the section with that ID

    // Scroll smoothly to that section
    window.scrollTo({
      top: targetSection.offsetTop,
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

const navbar = document.querySelector(".navigation");
const scrollThreshold = 150; // Change color after 150px scroll

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("scrolled"); // Add 'scrolled' class
  } else {
    navbar.classList.remove("scrolled"); // Remove 'scrolled' class
  }
});
