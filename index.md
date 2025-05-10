---
title: Welcome to my blog
---

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="description" content="Free Pomodoro timer for macOS.">
  <meta name="keywords" content="Titocus, Pomodoro, timer">
  <meta name="author" content="Kristína Koparanovová">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Titocus</title>
  <link rel="stylesheet" type="text/css" href="styles/style.css" />
  <script src="scripts/index.js" type="text/javascript" defer></script>
  <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
  <link rel="manifest" href="images/site.webmanifest">
</head>

<body>

  <!-- Navigation Bar -->
  <nav class="navbar" id="navbar">
    <div class="container nav-container">
      <div class="logo">
        <a href="#hero"><img src="images/logo-1024x1024.png" alt="Titocus Logo"></a>
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
        <input type="email" id="email" name="email" required/>

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

</body>

</html>
