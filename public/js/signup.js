const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();

    if (email && password) {
        const response = await fetch('/api/user/', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log('POST /api/user response.ok');
            // document.location.replace('/login')
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.signup')
    .addEventListener('submit', signupFormHandler);


// $(document).ready(function() {
//     var signUpForm = $("form.signup");
//     var emailInput = $("input#email-input");
//     var passwordInput = $("input#password-input");

//     signUpForm.on("submit", function(event) {
//         event.preventDefault();
//         var userData = {
//             email: emailInput.val().trim(),
//             password: passwordInput.val().trim()
//         };

//         if (!userData.email || !userData.password) {
//             return;
//         }

//         signUpUser(userData.email, userData.password);
//         emailInput.val("");
//         passwordInput.val("");
//     });

//     function signUpUser(email, password) {
//         $.post("/api/signup", {                 // POST /api/signup
//             email: email,
//             password: password
//         })
//         .then(function() {
//             window.location.replace("/members");            // what is this?
//         })
//         .catch(handleLoginErr);
//     }

//     function handleLoginErr(err) {
//         if (err.responseJSON.errors[0].message === "users.email must be unique") {
//             const errTxt = "Email already in use";
//             $("#alert .msg").text(errTxt);
//         }
//         $("#alert").fadeIn(500);
//         console.log(err.responseJSON);
//     }
// });