$(document).ready(function() {
      $('#login-form').on('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting automatically

        // Email validation function
        function validateEmail() {
            const email = $("#email").val().trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

            // Reset previous styles and error messages
            $("#email").removeClass("valid invalid");
            $("#email-error").hide();

            // Validate the email
            if (!email) {
                $("#email-error").text("Email is required.").show();
                $("#email").addClass("invalid"); // Apply invalid style
                return false;
            } else if (!emailRegex.test(email)) {
                $("#email-error").text("Please enter a valid email address.").show();
                $("#email").addClass("invalid"); // Apply invalid style
                return false;
            } else {
                $("#email").addClass("valid"); // Apply valid style
                return true;
            }
        }

        // Password validation function
function validatePassword() {
    const password = $("#password").val().trim();
    const minLength = 8; // Minimum length
    const maxLength = 20; // Maximum length
    const hasUppercase = /[A-Z]/.test(password); // At least one uppercase letter
    const hasLowercase = /[a-z]/.test(password); // At least one lowercase letter
    const hasDigit = /\d/.test(password); // At least one digit
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // At least one special character

    // Reset previous styles and error messages
    $("#password").removeClass("valid invalid");
    $("#password-error").hide();

    // Validate the password
    if (!password) {
        $("#password-error").text("Password is required.").show();
        $("#password").addClass("invalid"); // Apply invalid style
        return false;
    } else if (password.length < minLength) {
        $("#password-error").text(`Password must be at least ${minLength} characters long.`).show();
        $("#password").addClass("invalid"); // Apply invalid style
        return false;
    } else if (password.length > maxLength) {
        $("#password-error").text(`Password must not exceed ${maxLength} characters.`).show();
        $("#password").addClass("invalid"); // Apply invalid style
        return false;
    } else if (!hasUppercase) {
        $("#password-error").text("Password must contain at least one uppercase letter.").show();
        $("#password").addClass("invalid"); // Apply invalid style
        return false;
    } else if (!hasLowercase) {
        $("#password-error").text("Password must contain at least one lowercase letter.").show();
        $("#password").addClass("invalid"); // Apply invalid style
        return false;
    } else if (!hasDigit) {
        $("#password-error").text("Password must contain at least one digit.").show();
        $("#password").addClass("invalid"); // Apply invalid style
        return false;
    } else if (!hasSpecialChar) {
        $("#password-error").text("Password must contain at least one special character (e.g., @, #, $, %).").show();
        $("#password").addClass("invalid"); // Apply invalid style
        return false;
    } else {
        $("#password").addClass("valid"); // Apply valid style
        return true;
    }
}


        // Real-time validation for email and password
        $("#email").on("keyup change", validateEmail);
        $("#password").on("keyup change", validatePassword);

        // Handle form submission
        $("#login-form").on("submit", function (e) {
            e.preventDefault(); // Prevent form submission

            const isEmailValid = validateEmail();
            const isPasswordValid = validatePassword();

            if (isEmailValid && isPasswordValid) {
                alert("Login successful!"); // Proceed with login or further processing
            } else {
                // alert("Please correct the errors before submitting.");
            }
        });

    });
});