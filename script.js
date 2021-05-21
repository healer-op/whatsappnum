window.onload = function() {
            document.getElementById("phone").focus();
            console.log(" /$$   /$$                     /$$                     ");
            console.log("| $$  | $$                    | $$                     ");
            console.log("| $$  | $$  /$$$$$$   /$$$$$$ | $$  /$$$$$$   /$$$$$$  ");
            console.log("| $$$$$$$$ /$$__  $$ |____  $$| $$ /$$__  $$ /$$__  $$ ");
            console.log("| $$__  $$| $$$$$$$$  /$$$$$$$| $$| $$$$$$$$| $$  \__/ ");
            console.log("| $$  | $$| $$_____/ /$$__  $$| $$| $$_____/| $$       ");
            console.log("| $$  | $$|  $$$$$$$|  $$$$$$$| $$|  $$$$$$$| $$       ");
            console.log("|__/  |__/ \_______/ \_______/|__/ \_______/|__/       ");
            console.log('%c[+] Api Successfully Loaded! ', 'color: green');
        }
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    preferredCountries: ["in"],
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

function submitForm(e) {
    e.preventDefault();

    const phoneNumber = phoneInput.getNumber();
    let msg = encodeURI(document.getElementById('message').value) || '';

    if (!phoneNumber || !phoneInput.isValidNumber()) {
        alert('Please enter a valid phone number.')
        return;
    }


    location.href = `https://api.whatsapp.com/send?phone=${encodeURI(phoneNumber)}&text=${msg}`;
}
