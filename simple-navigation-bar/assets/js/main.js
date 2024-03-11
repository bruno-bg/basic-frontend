const sidebar = document.querySelector('.sidebar')
const menuButton = document.querySelector('.menu-button')

sidebar.addEventListener('click', () => {
    sidebar.style.display = 'none'
});

menuButton.addEventListener('click', () => {
    sidebar.style.display = 'flex'
});
