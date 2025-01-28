// Pre-Loader

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  // Set a delay to remove the preloader
  setTimeout(() => {
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = "0";

    // Wait for the preloader to fade out before showing the content
    setTimeout(() => {
      preloader.style.display = "none";
      mainContent.style.display = "block";
    }, 500); // Matches the transition time
  }, 2000); // Delay before fading out the preloader (in milliseconds)
});

// Navigation Bar 

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  document.addEventListener("scroll", () => {
    let currentSection = "";

    // Determine which section is currently in the viewport
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update the active state of navigation links
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
});

let lastScrollTop = 0; // Initialize the last scroll position

document.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav"); // Change this to your navbar selector
  let currentScroll = window.scrollY;

  // Check the scroll direction
  if (currentScroll > lastScrollTop) {
    // Scrolling down - hide navbar
    navbar.style.top = "-80px"; // Adjust to the height of your navbar
  } else {
    // Scrolling up - show navbar
    navbar.style.top = "0";
  }
  lastScrollTop = currentScroll; // Update the last scroll position
});


// Scroll button

const scrollButton = document.getElementById("scrollButton");
const nextSection = document.getElementById("portfolio");
// Add click event listener to the button
scrollButton.addEventListener("click", function () {
  // Scroll smoothly to the next section
  nextSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// Portfolio Section
const filterButtons = document.querySelectorAll(".filter-btn");
const filterItems = document.querySelectorAll(".filter-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    // Show/Hide portfolio items
    filterItems.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

// Add event listener for all filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent page refresh

    // Add your filtering logic here (optional)
    const filterValue = this.getAttribute('data-filter');
    console.log('Filter by:', filterValue);

    // Add your filtering functionality or class toggling here
    // Example: Call a function to show/hide portfolio items based on the filter
  });
});

// Slider

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const slideCount = slides.length;

// Duplicate slides for seamless infinite scroll
slides.forEach((slide) => {
  const clone = slide.cloneNode(true);
  slider.appendChild(clone);
});

// Update CSS variable for animation duration and translation
const slideWidth = slides[0].offsetWidth + 20; // Slide width + gap
slider.style.setProperty("--slide-count", slideCount);
slider.style.animationDuration = `${(slideCount * slideWidth) / 50}s`; // Adjust speed based on content

// Count animation on scroll

$(window).on("scroll", function () {
  $(".count").each(function () {
    var $this = $(this);
    var countTo = $this.attr("data-count");
    if (!$this.hasClass("counted")) {
      $this.addClass("counted");
      $({ countNum: $this.text() }).animate(
        { countNum: countTo },
        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum) + "%");
          },
          complete: function () {
            $this.text(this.countNum + "%");
          },
        }
      );
    }
  });
});

// Form Validations 
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Form fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Error fields
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  }

  // If all fields are valid, submit the form (this can be replaced with AJAX submission)
  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset(); // Clear the form
  }
});
