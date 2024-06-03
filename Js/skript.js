// script.js
document.addEventListener("DOMContentLoaded", function() {
    const entries = document.querySelectorAll(".entry");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    entries.forEach(entry => {
        observer.observe(entry);
    });
});
