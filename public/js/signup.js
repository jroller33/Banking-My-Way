$(document).ready(function() {
    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    signUpForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        signUpUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    function signUpUser(email, password) {
        $.post("/api/signup", {
            email: email,
            password: password
        })
        .then(function() {
            window.location.replace("/members");
        })
        .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        if (err.responseJSON.errors[0].message === "users.email must be unique") {
            const errTxt = "Email already in use";
            $("#alert .msg").text(errTxt);
        }
        $("#alert").fadeIn(500);
        console.log(err.responseJSON);
    }
});