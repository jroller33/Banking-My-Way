const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();

    if (email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
            // console.log(response, email, password);
            document.location.replace('/transaction');
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