const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/members');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);


// $(document).ready(function() {
//     var loginForm = $("form.login");
//     var emailInput = $("input#email-input");
//     var passwordInput = $("input#password-input");

//     loginForm.on("submit", function(event) {
//         event.preventDefault();
//         var userData = {
//             email: emailInput.val().trim(),
//             password: passwordInput.val().trim()
//         };

//         if (!userData.email || !userData.password) {
//             return;
//         }

//         loginUser(userData.email, userData.password);
//         emailInput.val("");
//         passwordInput.val("");
//     });

//     function loginUser(email, password) {               //  POST /api/login
//         $.post("/api/login", {
//             email: email,
//             password: password
//         })
//         .then(function() {
//             window.location.replace("/members");           // what's this?
//         })
//         .catch(handleLoginErr);
//     }
//     function handleLoginErr(err) {
//         if (err) {
//             const errTxt = "Email/Password not valid";
//             $("#alert .msg").text(errTxt);
//         }
//         $("#alert").fadeIn(500);
//         console.log(err.responseJSON);
//     }
// });