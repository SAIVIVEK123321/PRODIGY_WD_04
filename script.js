document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const newColor = 150 + (scrollY / 10);
        document.body.style.backgroundColor = `rgb(${newColor}, ${newColor}, ${newColor})`;
    });
});
