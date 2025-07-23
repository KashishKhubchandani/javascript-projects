var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var msgError = document.getElementById('msg-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0)
    {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0)
    {
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length !== 10)
    {
        phoneError.innerHTML = 'Phone no should be 10 digit';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/))
    {
        phoneError.innerHTML = 'Only digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/))
    {
        emailError.innerHTML = 'Email is invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMsg(){
    var msg = document.getElementById('contact-msg').value;
    var required = 15;
    var left = required - msg.length;

    if(left > 0)
    {
        msgError.innerHTML = left + ' more characters required';
        return false;
    }
    msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMsg()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';
            
        },3000);
        return false;
    }

}

