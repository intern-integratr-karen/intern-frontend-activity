var usernameError = document.getElementById ('username-error');
var firstnameError = document.getElementById ('firstname-error');
var lastnameError = document.getElementById ('lastname-error');
var passwordError = document.getElementById ('password-error');
var confirmpasswordError = document.getElementById ('confirmpassword-error');

function validateUserName(){
    var username = document.getElementById('contact-username').value;

    if(username.length == 0){
      usernameError.innerHTML = ' Username is required';
      return false;
    }
    if(!username.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        usernameError.innerHTML = 'Write username';
        return false;
    }
    usernameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateFirstName(){
  var firstname = document.getElementById('contact-firstname').value;

  if(firstname.length == 0){
    firstnameError.innerHTML = ' Firstname is required';
    return false;
  }
  if(!firstname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
      firstnameError.innerHTML = 'Write Firstname';
      return false;
  }
  firstnameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateLastName(){
  var lastname = document.getElementById('contact-lastname').value;

  if(lastname.length == 0){
    lastnameError.innerHTML = ' Lastname is required';
    return false;
  }
  if(!lastname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
      lastnameError.innerHTML = 'Write Lastname';
      return false;
  }
  lastnameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validatePassword(){
  var password = document.getElementById('contact-password').value;
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    const isContainsSymbol =/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/; 

  if(password == "") {   
    passwordError.innerHTML = ' Fill the password please!';
     return false;  
  }  
    
   if(password.length < 8) {  
     document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
     return false;  
  }  
  
   if(password.length > 15) {  
     document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
     return false;  
  } else {  
     alert("Password is correct");  
  }  passwordError.innerHTML = '<i class="fas fa-check-circle"></i>';
}  

function validateconfirmPassword(){
  var confirmpassword = document.getElementById('contact-confirmpassword').value;

   if(confirmPassword == ""){
   alert("Error: The Confirm Password field is Empty.");

}  else if (password != confirmPassword) {
     alert("Error: The Password should be the same");
}
}