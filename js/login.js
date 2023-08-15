
// step 1: Add click event hander with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step 2: get the email address inside the email input field
    // always remember to use  .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step 3:get password
    // set id on the html elememnt
    // get the element 
    // get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //DANGER:::::: do not  check email password on the client side
    // spet 4: verify email and password and check wheteher valid user or not

    if (email === 'saimasraboni33@gmail.com' && password === 'iloveyouhoney') {
        console.log('Valid User');
    }
    else {
        alert('Password Thik Kore den.Password Kamne Vulen!!');
    }
    window.location.href = "bank.html";


})
