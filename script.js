document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks! Your message has been received.");
  this.reset();
});

const scrollBtn = document.getElementById("scrollToTopBtn");

window.onscroll = () => {
  // Show button after 300px scroll
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = () => {
  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
