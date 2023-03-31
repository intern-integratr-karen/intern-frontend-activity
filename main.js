var usernameError = document.getElementById ('username-error');
var passwordError = document.getElementById ('password-error');

function validateName(){
    var name = document.getElementById('username').value;

    if(username.length == 0){
      usernameError.innerHTML = ' Username is required';
      return false;
    }
    if(!username.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        usernameError.innerHTML = 'Write username';
        return false;
    }

}
