/**
 * Khatat Usman - Website Scripts
 * Handles language switching, mobile menu, portfolio gallery, and modal functionality
 */

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // ===== LANGUAGE SWITCHING =====
  const enBtn = document.getElementById("en-btn");
  const arBtn = document.getElementById("ar-btn");

  // Set default language to English
  let currentLang = "en";

  // Language toggle functionality
  enBtn.addEventListener("click", function () {
    if (currentLang !== "en") {
      document.body.classList.remove("rtl");
      enBtn.classList.add("active");
      arBtn.classList.remove("active");
      currentLang = "en";
    }
  });

  arBtn.addEventListener("click", function () {
    if (currentLang !== "ar") {
      document.body.classList.add("rtl");
      arBtn.classList.add("active");
      enBtn.classList.remove("active");
      currentLang = "ar";
    }
  });

  // ===== MOBILE MENU TOGGLE =====
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking on a nav link
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });

  // ===== PORTFOLIO GALLERY =====
  const portfolioGrid = document.querySelector(".portfolio-grid");

  // Portfolio items data (will be dynamically generated)
  const portfolioItems = [];

  // Generate portfolio items from work1.jpeg to work23.jpeg
  for (let i = 1; i <= 23; i++) {
    portfolioItems.push({
      id: i,
      image: `work/work${i}.jpeg`,
      titleEn: `Project ${i}`,
      titleAr: `مشروع ${i}`,
      categoryEn: "Signage",
      categoryAr: "لافتات",
    });
  }

  // Render portfolio items
  portfolioItems.forEach((item) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = "portfolio-item";
    portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.titleEn}">
            <div class="portfolio-overlay">
                <div>
                    <h3 class="en">${item.titleEn}</h3>
                    <h3 class="ar">${item.titleAr}</h3>
                    <p class="en">${item.categoryEn}</p>
                    <p class="ar">${item.categoryAr}</p>
                </div>
            </div>
        `;

    // Add to portfolio grid
    portfolioGrid.appendChild(portfolioItem);

    // Add click event for modal
    portfolioItem.addEventListener("click", function () {
      openModal(item.image, item.titleEn, item.titleAr);
    });
  });

  // ===== MODAL FUNCTIONALITY =====
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const closeModal = document.querySelector(".close-modal");

  // Function to open modal with image
  function openModal(imgSrc, captionEn, captionAr) {
    modal.style.display = "block";
    modalImg.src = imgSrc;

    // Set caption based on current language
    if (currentLang === "en") {
      modalCaption.textContent = captionEn;
    } else {
      modalCaption.textContent = captionAr;
    }
  }

  // Close modal when clicking on X
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // ===== CONTACT FORM =====
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here you would typically send the form data to a server
    // For now, we'll just show an alert
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);

    // Reset form
    contactForm.reset();
  });

  // ===== SMOOTH SCROLLING =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for header
          behavior: "smooth",
        });
      }
    });
  });

  // ===== HEADER SCROLL EFFECT =====
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.style.padding = "10px 0";
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.padding = "15px 0";
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
  });
});
