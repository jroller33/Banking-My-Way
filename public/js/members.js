$(document).ready(function() {
    $.get("/api/user_data").then(function(data) {
        var emailString = data.email;
        var emailSplitArry = emailString.split("@");
        $(".member-name").text(emailSplitArry[0]);
        $(".member-email").text(data.email);
        console.log("email string: ", emailString);
    });
})
//more to add at later date