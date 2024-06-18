function showsidebar(){
const sidebar =document.querySelector('.sidebar')
sidebar. style.display='flex'
}
function hidesidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar. style.display='none'
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    
    event.preventDefault();


    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }


    this.submit();
});
function validateForm() {
    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var isValid = true;

    // Validate username
    if (username === '') {
        isValid = false;
        document.getElementById('usernameError').textContent = 'Veuillez entrer votre nom.';
    } else {
        document.getElementById('usernameError').textContent = '';
    }

    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Veuillez entrer une adresse email valide.';
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validate message
    if (message === '') {
        isValid = false;
        document.getElementById('messageError').textContent = 'Veuillez écrire votre message.';
    } else {
        document.getElementById('messageError').textContent = '';
    }

    return isValid;
}