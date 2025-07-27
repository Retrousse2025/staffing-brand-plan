// Toggle display for top-level accordions
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            // Collapse other top level accordions when this one is opened
            document.querySelectorAll('.accordion-content').forEach(section => {
                if (section !== content) {
                    section.style.display = 'none';
                }
            });
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Toggle display for sub categories
    const subHeaders = document.querySelectorAll('.sub-header');
    subHeaders.forEach(sub => {
        sub.addEventListener('click', () => {
            const subContent = sub.nextElementSibling;
            // collapse other sub-contents inside same accordion section
            const siblingContents = sub.parentElement.parentElement.querySelectorAll('.sub-content');
            siblingContents.forEach(sc => {
                if (sc !== subContent) {
                    sc.style.display = 'none';
                }
            });
            subContent.style.display = subContent.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Toggle note fields
    const noteToggles = document.querySelectorAll('.note-toggle');
    noteToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const textarea = toggle.nextElementSibling;
            if (textarea.style.display === 'block') {
                textarea.style.display = 'none';
                toggle.textContent = 'Add Note';
            } else {
                textarea.style.display = 'block';
                toggle.textContent = 'Hide Note';
            }
        });
    });
});
