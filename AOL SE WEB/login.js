const email = document.getElementById('email');
const pass = document.getElementById('pass');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

action.addEventListener('Sign In', (e) => {
    let messages = []
    if(!email.value){
        messages.push('Email is required');
        email.style.display = "block";
        return false;
    }
    if(pass.value.length <= 6 ){
        messages.push('Password  must be longer than 6 characters')
    }
    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})