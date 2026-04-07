document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Check if current is active
            const isActive = item.classList.contains('active');
            
            // Close all
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const content = otherItem.querySelector('.accordion-content');
                content.style.maxHeight = null;
            });

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                const content = item.querySelector('.accordion-content');
                // Calculate height dynamically
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
