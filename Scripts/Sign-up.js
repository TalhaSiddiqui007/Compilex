// main.js
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents page reload

    // Perform your validation or API sign-up call here...

    // Redirect to the new page
    window.location.href = 'welcome.html';
});

function greeting() {
    alert('hello world');

}