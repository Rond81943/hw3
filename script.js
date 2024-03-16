const menuItems = document.querySelectorAll('.menu a');
const tabs = document.querySelectorAll('.tab');

menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', (e) => {
        e.preventDefault();
        menuItems.forEach((item) => {
            item.classList.remove('active')
        });
        menuItem.classList.add('active');
        tabs.forEach((tab) => {
            tab.classList.remove('active')
        });
        tabs[index].classList.add('active');
    });
});