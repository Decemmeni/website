document.addEventListener('DOMContentLoaded', () => {
    // Api to check if elements appears in view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            // Play slide in for H1 tags
            if (entry.isIntersecting && entry.target.tagName == "H1") {
                entry.target.classList.add('slide-in');
            }
            // Play delayed slide in for p tags
            else if (entry.isIntersecting && entry.target.tagName == "P") {
                entry.target.classList.add('delayed-slide-in');
            }

            observer.unobserve(entry.target);
        });
    });

    // Connect all elements to trigger
    document.querySelectorAll("h1, p").forEach(el => {
        observer.observe(el);
    });
});
