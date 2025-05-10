---
title: Welcome to my blog
---

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Titocus</title>
  <link rel="stylesheet" href="style/styles.css" />
</head>

<body>

  <!-- Navigation Bar -->
  <nav class="navbar" id="navbar">
    <div class="container nav-container">
      <div class="logo">
        <img src="logo-placeholder.png" alt="Titocus Logo" height="32">
      </div>

      <!-- Desktop nav -->
      <ul class="nav-links">
        <li><a href="#hero">Home</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle">Titocus &#x25BE;</a>
          <ul class="dropdown-menu">
            <li><a href="#overview">Features</a></li>
            <li><a href="#feedback">Feedback</a></li>
          </ul>
        </li>
        <li><a href="Titocus.dmg" class="download-btn">Download Titocus</a></li>
      </ul>

      <!-- Hamburger icon (mobile only) -->
      <button class="hamburger" id="hamburger" aria-label="Toggle navigation">
        <span>&#9776;</span>
      </button>
    </div>
  </nav>

  <!-- Mobile Navigation Panel -->
  <div class="mobile-nav-panel" id="mobileNav">
    <ul class="nav-links-mobile">
      <li><a href="#hero" class="mobile-link">Home</a></li>
      <li class="dropdown" id="dropdown">
        <button type="button" class="dropdown-toggle" id="dropdownToggle">
          Titocus <span id="dropdownIcon">&#x25BE;</span>
        </button>
        <ul class="dropdown-menu" id="dropdownMenu">
          <li><a href="#overview">Features</a></li>
          <li><a href="#feedback">Feedback</a></li>
        </ul>
      </li>
      <li><a href="Titocus.dmg" class="mobile-link">Download Titocus</a></li>
    </ul>
  </div>

  <!-- Hero Section -->
  <header id="hero" class="hero">
    <div class="container">
      <h1 class="title">Titocus</h1>
      <p class="subtitle">Focused productivity. Pomodoro reimagined for macOS.</p>
      <a href="#overview" class="cta-button">Learn more</a>
    </div>
  </header>

  <!-- Overview Section -->
  <section id="overview" class="overview">
    <div class="container">
      <h2>Overview</h2>
      <div class="features">
        <div class="feature">
          <h3>Minimalist Interface</h3>
          <p>Designed to keep you focused with an elegant and unobtrusive timer.</p>
        </div>
        <div class="feature">
          <h3>Native macOS Feel</h3>
          <p>Seamlessly integrates with macOS aesthetics and system behavior.</p>
        </div>
        <div class="feature">
          <h3>Custom Work Sessions</h3>
          <p>Customize durations for focus, break, and long break intervals.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Screenshot Section -->
  <section class="mockup">
    <div class="container">
      <h2>See Titocus in Action</h2>
      <img src="placeholder.png" alt="Titocus app screenshot" class="app-mockup" />
    </div>
  </section>

  <!-- Feedback Section -->
  <section class="feedback" id="feedback">
    <div class="container">
      <h2>Send Us Feedback</h2>
      <form action="mailto:your@email.com" method="POST" enctype="text/plain">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 Titocus. All rights reserved.</p>
    </div>
  </footer>

  <!-- JavaScript -->
  <script>
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const dropdown = document.getElementById('dropdown');
    const dropdownToggle = document.getElementById('dropdownToggle');
    const dropdownIcon = document.getElementById('dropdownIcon');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const submenuLinks = document.querySelectorAll('#dropdownMenu a');

    // Scroll effect navbar
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    });

    // Toggle dropdown submenu
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isShown = dropdown.classList.toggle('show');
      dropdownIcon.innerHTML = isShown ? '&#x25B4;' : '&#x25BE;';
    });

    // Open toggle mobile nav panel
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });

    // Close toggle mobile nav panel when clicking links
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });

    submenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });

    // Close toggle mobile nav panel when clicking outside
    document.addEventListener('click', (e) => {
      if (
        mobileNav.classList.contains('open') &&
        !mobileNav.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        mobileNav.classList.remove('open');
        dropdown.classList.remove('show');
        dropdownIcon.innerHTML = '&#x25BE;';
      }
    });
  </script>

</body>

</html>
