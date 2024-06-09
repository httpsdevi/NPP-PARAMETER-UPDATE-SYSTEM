// Example of adding interactivity, e.g., scrolling to section on click
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
