var usernameBtn = document.getElementById('username');
var loginForm = document.getElementById('login-form');
var usernameError = document.getElementById('username-error')

usernameBtn.addEventListener('input', function(e) {
    // console.log(e.target.value);
    var pattern = /^[\w]{6,8}$/;
    var currentValue = e.target.value

    if(pattern.test(currentValue) === false){
    usernameError.style.display = 'block'
    } else{
    usernameError.style.display = 'none'
    }
})