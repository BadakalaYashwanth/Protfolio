// You can add any custom JavaScript functionality here
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for card container
    const container = document.querySelector('.cards-container');
    
    // Add mouse wheel horizontal scrolling
    container.addEventListener('wheel', function(e) {
        if (e.deltaY > 0) {
            container.scrollLeft += 100;
        } else {
            container.scrollLeft -= 100;
        }
        e.preventDefault();
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            container.scrollLeft += 300;
        } else if (e.key === 'ArrowLeft') {
            container.scrollLeft -= 300;
        }
    });
    
    // Initialize tooltips for icons
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});