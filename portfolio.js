document.addEventListener("DOMContentLoaded", () => {
  let prevScrollPos = window.scrollY;
  const navbar = document.querySelector(".navBar"); 

  if (!navbar) {
      console.error("Error: Navbar element not found");
      return;
  }

  window.addEventListener("scroll", () => {
      const currentScrollPos = window.scrollY;
      console.log(currentScrollPos, prevScrollPos);

      if (currentScrollPos > prevScrollPos) {
          navbar.classList.add('hide');
          navbar.classList.remove('show');
      } else {
          navbar.classList.add('show');
          navbar.classList.remove('hide');
      }
      
      prevScrollPos = currentScrollPos;
  });
});
