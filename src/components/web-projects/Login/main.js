import 'bootstrap/dist/css/bootstrap.min.css';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const loginError = document.getElementById('loginError');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Reset error states
        usernameError.classList.add('d-none');
        passwordError.classList.add('d-none');
        loginError.classList.add('d-none');

        let valid = true;

        if (usernameInput.value.trim() === "") {
            usernameError.classList.remove('d-none');
            valid = false;
        }

        if (passwordInput.value.trim() === "") {
            passwordError.classList.remove('d-none');
            valid = false;
        }

        if (valid) {
            // Simulate incorrect credentials (fake check)
            if (usernameInput.value !== "admin" || passwordInput.value !== "1234") {
                loginError.classList.remove('d-none');
            } else {
                alert("Login successful!");
                // Redirect or take action here
            }
        }
    });
});