function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    // 'toggle' method is used to add or remove the "open" class from the 'icon' element
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}