function DarkMode() {
    var body = document.body;
    var buttonBackground = document.getElementById("Buttonbg");
    var button = document.getElementById("button");
    var picture = document.getElementById("Picture");
    var alreadyDark = document.getElementById("AlrDark");

    // Check if dark mode is currently active
    if (body.getAttribute('data-bs-theme') === 'dark') {
        // Switch to light mode
        body.removeAttribute('data-bs-theme');
        buttonBackground.classList.remove("bg-dark");
        buttonBackground.classList.add("bg-white");
        button.innerHTML = 'dark mode';
        button.classList.remove("btn-light");
        button.classList.add("btn-dark");
        picture.src = 'Rafael.jpg';
        alreadyDark.classList.remove("bg-black");
        alreadyDark.classList.add("bg-dark")
    } else {
        // Switch to dark mode
        body.setAttribute('data-bs-theme', 'dark');
        buttonBackground.classList.remove("bg-white");
        buttonBackground.classList.add("bg-dark");
        button.innerHTML = 'Light mode';
        button.classList.remove("btn-dark");
        button.classList.add("btn-light");
        picture.src = 'RafaelDarkMode.jpg';
        alreadydark.classList.remove("bg-dark");
        alreadydark.classList.add("bg-black");
    }
}


document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar-collapse');
  
    var wasCollapsed = false;
  
    window.addEventListener('resize', function () {
      if (navbar.classList.contains('show') && !wasCollapsed) {
        console.log('Navbar collapsed due to window size shrinking');
        wasCollapsed = true;
      } else {
        wasCollapsed = false;
      }
    });
  });