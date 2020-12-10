//enabling input validation for contact form
(function() {
    let form = document.querySelector('#contact-form');
    let emailInput = form.querySelector('#mail');
    let msgInput = form.querySelector('#msgbox');

    function validateEmail() {
        let value = emailInput.value;

        if(!value) {
            showErrorMessage(emailInput, 'E-mail is a required field.');
            return false;
        }
        if(value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.');
            return false;
        }
        showErrorMessage(emailInput, null);
        return true;
    }

    function validateMsg() {
        let value = msgInput.value;
        if(!value || value.length <= 10) {
            showErrorMessage(msgInput, 'Please enter a message. (At least 10 characters)');
            return false;
        }
        showErrorMessage(msgInput, null);
        return true;
    }

    function showErrorMessage(input, message) {
        let wrapper = input.parentElement;

        let error = wrapper.querySelector('.error-message');
        if(error) {
            wrapper.removeChild(error);
        }

        if(message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            wrapper.appendChild(error);
        }
    }
    emailInput.addEventListener('input', validateEmail);
    msgInput.addEventListener('input', validateMsg);
})();
