// Show and hide the menu items based on selected category
function showMenu(menuType) {
    const menuSections = document.querySelectorAll('.menu-items');
    menuSections.forEach(section => section.style.display = 'none'); // Hide all menu sections
    document.getElementById(menuType).style.display = 'block'; // Show the selected menu section
}

// Calculate the total price of selected items
function calculateTotal() {
    const selectedItems = document.querySelectorAll('.menu-item:checked');
    let totalPrice = 0;
    
    selectedItems.forEach(item => {
        totalPrice += parseInt(item.getAttribute('data-price'));
    });
    
    document.getElementById('total-price').textContent = totalPrice;
}
