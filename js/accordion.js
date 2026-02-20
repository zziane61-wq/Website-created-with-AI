// Toggle accordion function
function toggleAccordion(button) {
    const accordionItem = button.parentElement;
    const isActive = accordionItem.classList.contains('active');
    
    // Close all accordion items
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-header').classList.remove('active');
    });
    
    // Open the clicked accordion item if it wasn't active
    if (!isActive) {
        accordionItem.classList.add('active');
        button.classList.add('active');
    }
}

// Close accordion when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.accordion-item')) {
        // You can optionally close accordion on outside click
        // Uncomment the code below if you want it
        /*
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.accordion-header').classList.remove('active');
        });
        */
    }
});

// Prevent closing when clicking inside
document.querySelectorAll('.accordion-body').forEach(body => {
    body.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
