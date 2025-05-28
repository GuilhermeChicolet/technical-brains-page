function toggleMenu(event) {
  event.preventDefault();
  const submenu = event.target.nextElementSibling;
  submenu.classList.toggle("show");
}
