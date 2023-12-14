const nav = document.getElementById('navbar');

function handleScroll() {
    // Check the scroll position
    const scrollPosition = window.scrollY;
  
    // Add or remove a class based on the scroll position
    if (scrollPosition > 100) {
      nav.classList.add('fixed'); // You can replace 'scrolled' with your desired class name
    } else {
      nav.classList.remove('fixed');
    }
  }
  
  // Listen for the scroll event
  window.addEventListener('scroll', handleScroll);