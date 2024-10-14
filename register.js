$(document).ready(function () {
    // Regular expression for only alphabetic characters (no digits or special characters)
    const nameRegex = /^[a-zA-Z]+$/;

    // Validate First Name
    function validateFirstName() {
        const firstname = $("#firstname").val().trim();
        if (!firstname) {
            $("#firstname-err").text("First name is required.").show();
            $("#firstname").addClass("invalid").removeClass("valid");
            return false;
        } else if (!nameRegex.test(firstname)) {
            $("#firstname-err").text("First name should contain only alphabetic characters.").show();
            $("#firstname").addClass("invalid").removeClass("valid");
            return false;
        } else {
            $("#firstname-err").hide();
            $("#firstname").addClass("valid").removeClass("invalid");
            return true;
        }
    }

    // Validate Last Name
    function validateLastName() {
        const lastname = $("#lastname").val().trim();
        if (!lastname) {
            $("#lastname-err").text("Last name is required.").show();
            $("#lastname").addClass("invalid").removeClass("valid");
            return false;
        } else if (!nameRegex.test(lastname)) {
            $("#lastname-err").text("Last name should contain only alphabetic characters.").show();
            $("#lastname").addClass("invalid").removeClass("valid");
            return false;
        } else {
            $("#lastname-err").hide();
            $("#lastname").addClass("valid").removeClass("invalid");
            return true;
        }
    }

    // Validate Date of Birth
    function validateDob() {
        const dob = $("#dob").val();
        if (!dob) {
            $("#dob-err").text("Date of birth is required.").show();
            $("#dob").addClass("invalid").removeClass("valid");
            return false;
        } else {
            $("#dob-err").hide();
            $("#dob").addClass("valid").removeClass("invalid");
            return true;
        }
    }

    // Validate Gender
    function validateGender() {
        const gender = $("input[name='gender']:checked").val();
        if (!gender) {
            $("#gender-err").text("Gender is required.").show();
            $("input[name='gender']").addClass("invalid").removeClass("valid");
            return false;
        } else {
            $("#gender-err").hide();
            $("input[name='gender']").removeClass("invalid").addClass("valid");
            return true;
        }
    }

    // Validate Phone Number
    function validatePhone() {
        const phone = $("#phone").val().trim();
        const phoneRegex = /^\d{10}$/; // simple regex for 10-digit number
        if (!phone) {
            $("#phone-err").text("Phone number is required.").show();
            $("#phone").addClass("invalid").removeClass("valid");
            return false;
        } else if (!phoneRegex.test(phone)) {
            $("#phone-err").text("Please enter a valid 10-digit phone number.").show();
            $("#phone").addClass("invalid").removeClass("valid");
            return false;
        } else {
            $("#phone-err").hide();
            $("#phone").addClass("valid").removeClass("invalid");
            return true;
        }
    }

    // Validate Email
    function validateEmail() {
        const email = $("#email").val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            $("#email-err").text("Email is required.").show();
            $("#email").addClass("invalid").removeClass("valid");
            return false;
        } else if (!emailRegex.test(email)) {
            $("#email-err").text("Please enter a valid email address.").show();
            $("#email").addClass("invalid").removeClass("valid");
            return false;
        } else {
            $("#email-err").hide();
            $("#email").addClass("valid").removeClass("invalid");
            return true;
        }
    }

    // Validate State
    function validateState() {
        const state = $('#state').val();
        if (!state) {
            $('#state-err').text("State is required.").show();
            $('#state').addClass("invalid").removeClass("valid");
            return false;
        } else {
            $('#state-err').hide();
            $('#state').addClass("valid").removeClass("invalid");
            return true;
        }
    }

    // Validate City
    function validateCity() {
        const city = $('#city').val();
        if (!city) {
            $('#city-err').text("City is required.").show();
            $('#city').addClass("invalid").removeClass("valid");
            return false;
        } else {
            $('#city-err').hide();
            $('#city').addClass("valid").removeClass("invalid");
            return true;
        }
    }

    // Populate city options based on selected state
    $('#state').on('change', function() {
        let selectedState = $(this).val();
        let cityOptions = "";

        if (selectedState === 'mdi') {
            cityOptions = "<option value='KV'>Kaala vasal</option><option value='MTU'>Maatuthaavani</option><option value='peri'>Periyar</option>";
        } else if (selectedState === 'cni') {
            cityOptions = "<option value='EGM'>Egmore</option><option value='TM'>Thambaram</option><option value='bch'>vadapalani</option>";
        } else if (selectedState === 'tvl') {
            cityOptions = "<option value='PLG'>Palayamkottai</option><option value='Tn'>Town</option><option value='jun'>Junction</option>";
        } else {
            cityOptions = "<option value=''>Select a city</option>"; // Default option if no state is selected
        }

        $('#city').html(cityOptions);
        validateState();  // Re-validate state when changed
        validateCity();   // Re-validate city when the state is changed
    });

        // Validate Username
    function validateUsername() {
        const username = $("#username").val().trim();
        const minLength = 3; // minimum length
        const maxLength = 15; // maximum length
        const usernameRegex = /^[a-zA-Z0-9_]+$/; // allows alphanumeric and underscore

        if (!username) {
            $("#username-err").text("Username is required.").show();
            $("#username").addClass("invalid").removeClass("valid");
            return false;
        } else if (username.length < minLength) {
            $("#username-err").text(`Username must be at least ${minLength} characters long.`).show();
            $("#username").addClass("invalid").removeClass("valid");
            return false;
        } else if (username.length > maxLength) {
            $("#username-err").text(`Username must not exceed ${maxLength} characters.`).show();
            $("#username").addClass("invalid").removeClass("valid");
            return false;
        } else if (!usernameRegex.test(username)) {
            $("#username-err").text("Username can only contain letters, numbers, and underscores.").show();
            $("#username").addClass("invalid").removeClass("valid");
            return false;
        } else {
            $("#username-err").hide();
            $("#username").addClass("valid").removeClass("invalid");
            return true;
        }
    }


    // Validate Password
    function validatePassword() {
        const password = $("#password").val().trim();
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // At least 8 characters, 1 uppercase, 1 lowercase, and 1 digit

        if (!password) {
            $("#password-err").text("Password is required.").show();
            $("#password").addClass("invalid").removeClass("valid");
            return false;
        } else if (!passwordRegex.test(password)) {
            $("#password-err").text("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.").show();
            $("#password").addClass("invalid").removeClass("valid");
            return false;
        } else {
            $("#password-err").hide();
            $("#password").addClass("valid").removeClass("invalid");
            return true;
        }
    }

    // Validate Confirm Password
    function validateConfirmPassword() {
        const password = $("#password").val().trim();
        const confirmPassword = $("#conpassword").val().trim();

        if (!confirmPassword) {
            $("#conpassword-err").text("Confirm password is required.").show();
            $("#conpassword").addClass("invalid").removeClass("valid");
            return false;
        } else if (confirmPassword !== password) {
            $("#conpassword-err").text("Passwords do not match.").show();
            $("#conpassword").addClass("invalid").removeClass("valid");
            return false;
        } else {
            $("#conpassword-err").hide();
            $("#conpassword").addClass("valid").removeClass("invalid");
            return true;
        }
    }


    // Validate form on submit
    $("#register-form").on("submit", function (e) {
        e.preventDefault(); // prevent form submission

        const isFirstNameValid = validateFirstName();
        const isLastNameValid = validateLastName();
        const isDobValid = validateDob();
        const isGenderValid = validateGender();
        const isPhoneValid = validatePhone();
        const isEmailValid = validateEmail();
        const isStateValid = validateState();
        const isCityValid = validateCity();
        const isUsernameValid = validateUsername();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        

        if (isFirstNameValid && isLastNameValid && isDobValid && isGenderValid && isPhoneValid && isEmailValid && isStateValid && isCityValid && isUsernameValid && isPasswordValid && isConfirmPasswordValid ) {
            alert("Form submitted successfully!");
        } else {
            // alert("Please correct the errors before submitting.");
        }
    });

    // Real-time validation
    $("#firstname").on("keyup focusout", validateFirstName);
    $("#lastname").on("keyup focusout", validateLastName);
    $("#dob").on("change", validateDob);
    $("input[name='gender']").on("change", validateGender);
    $("#phone").on("keyup focusout", validatePhone);
    $("#email").on("keyup focusout", validateEmail);
    $("input[name='state']").on("change", validateState);
    $("#city").on("change", validateCity);
    $("#username").on("keyup focusout", validateUsername);
    $("#password").on("keyup focusout", validatePassword);
    $("#conpassword").on("keyup focusout", validateConfirmPassword);
});
