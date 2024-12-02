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

document
  .querySelectorAll(".intro-section button, .navigation button")
  .forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = e.target.closest("a").getAttribute("href");
      const targetSection = document.querySelector(targetId);

      const navbarHeight = document.querySelector(".navigation").offsetHeight;

      // Scroll to the target section
      window.scrollTo({
        top: targetSection.offsetTop - navbarHeight + 1,
        behavior: "smooth",
      });
    });
  });

// NavBar color change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navigation");
  const aboutSection = document.querySelector(".about-section");

  const aboutRect = aboutSection.getBoundingClientRect();
  const navRect = navbar.getBoundingClientRect();

  // Check if the .about-section is on screen
  if (navRect.bottom >= aboutRect.top) {
    navbar.style.backgroundColor = "#ffffff";
  } else {
    navbar.style.backgroundColor = "#d6f8d7";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("scrolled"); // Add 'scrolled' class
  } else {
    navbar.classList.remove("scrolled"); // Remove 'scrolled' class
  }
});

const dropArea = document.getElementById("drop-area");
const desc = dropArea.querySelector(".desc"); // Selects the description text
const resultOutput = document.querySelector(".stage-result-output"); // For displaying results
const resultDescription = document.querySelector(".stage-result-description"); // For result description

// Highlight the drop area when dragging over
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropArea.classList.add("drag-over"); // Optional: Add a class for visual feedback
  desc.textContent = "Release to upload files";
});

// Remove highlight when dragging leaves the area
dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("drag-over");
  desc.textContent = "Drag & Drop Files here";
});

// Handle files dropped onto the area
dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  dropArea.classList.remove("drag-over");
  const files = event.dataTransfer.files;
  displayFileNames(files);
});

// Allow click to open file selector
dropArea.addEventListener("click", () => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.multiple = true; // Allow multiple file uploads
  fileInput.style.display = "none"; // Hide the input element
  document.body.appendChild(fileInput);

  fileInput.addEventListener("change", () => {
    const files = fileInput.files;
    displayFileNames(files);
    fileInput.remove(); // Remove the input after use
  });

  fileInput.click();
});

// Function to display file names and update result section
function displayFileNames(files) {
  if (files.length > 0) {
    const fileNames = Array.from(files)
      .map((file) => file.name)
      .join(", ");
    desc.textContent = `Uploaded: ${fileNames}`;
    resultOutput.textContent = "Files Uploaded!";
    resultDescription.textContent = fileNames;
  } else {
    desc.textContent = "No files uploaded.";
    resultOutput.textContent = "No Files";
    resultDescription.textContent = "Please upload files to see the results.";
  }
}
