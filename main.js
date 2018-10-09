document.addEventListener('DOMContentLoaded',onload)
function onload() {



    var newdiv = document.createElement('div');
    document.body.appendChild(newdiv);

    //Email
    var emailInput=document.createElement('input');
    emailInput.type='text';
    emailInput.placeholder='Email';
    newdiv.appendChild(emailInput);




    //password
    var passwordInput=document.createElement('input');
    passwordInput.type='text';
    passwordInput.placeholder='Password';
    newdiv.appendChild(passwordInput);



    //Log in button
    var loginButton=document.createElement('button');
    loginButton.textContent='Log In'
    newdiv.appendChild(loginButton);


    //BR
    var BR=document.createElement('br');
    newdiv.appendChild(BR);




    //REGISTRATION BUTTON
    var registerButton=document.createElement('a');

    registerButton.textContent='Registration';
    registerButton.href='#registration';
    newdiv.appendChild(registerButton);
    registerButton.style.marginRight='10px';
    registerButton.style.textDecoration='none';
    registerButton.style.color='black';


    //FORGET PASSWORD
    var forgetPassword=document.createElement('a');
    forgetPassword.textContent='forget password';
    forgetPassword.href='#forgetpassword';
    newdiv.appendChild(forgetPassword);
    forgetPassword.style.textDecoration='none';
    forgetPassword.style.color='black';



    window.addEventListener('hashchange',function () {
        if (location.hash=='#registration'){
            document.body.removeChild(newdiv);


            //REGISTRATION PAGE DIV
            var registrationDiv=document.createElement('div');
            document.body.appendChild(registrationDiv);



            //FIRST NAME
            var firstName=document.createElement('input');
            firstName.type='text';
            firstName.placeholder='First name';
            registrationDiv.appendChild(firstName);
            firstName.style.marginBottom='10px';

            //BR
            var BR=document.createElement('br');
            registrationDiv.appendChild(BR);



            //LAST NAME
            var lastName=document.createElement('input');
            lastName.type='text';
            lastName.placeholder='Last name';
            registrationDiv.appendChild(lastName);
            lastName.style.marginBottom='10px';

            //BR
            var BR=document.createElement('br');
            registrationDiv.appendChild(BR);

            //MOBILE OR EMAIL
            var mobOrEmail=document.createElement('input');
            mobOrEmail.type='text';
            mobOrEmail.placeholder='Mobile or email';
            registrationDiv.appendChild(mobOrEmail);
            mobOrEmail.style.marginBottom='10px';

            //BR
            var BR=document.createElement('br');
            registrationDiv.appendChild(BR);

            //PAASWORD
            var newPassword=document.createElement('input');
            newPassword.type='text';
            newPassword.placeholder='Password';
            registrationDiv.appendChild(newPassword);
            newPassword.style.marginBottom='10px';

            //BR
            var BR=document.createElement('br');
            registrationDiv.appendChild(BR);

            //CONFIRM PASSWORD
            var confirmPassword=document.createElement('input');
            confirmPassword.type='text';
            confirmPassword.placeholder='Confirm Password';
            registrationDiv.appendChild(confirmPassword);
            confirmPassword.style.marginBottom='10px';

            //BR
            var BR=document.createElement('br');
            registrationDiv.appendChild(BR);

            //SIGN UP BUTTON
            var signUpButton=document.createElement('button');
            signUpButton.textContent='Sign up';
            registrationDiv.appendChild(signUpButton);


        }else if (location.hash=='#forgetpassword'){
            document.body.removeChild(newdiv);

            //FORGET PASSWORD
            var forgetPassdiv=document.createElement('div');
            document.body.appendChild(forgetPassdiv);


            //INPUT
            var forgetPassInput=document.createElement('input');
            forgetPassInput.type='text';
            forgetPassInput.placeholder='Enter email';
            forgetPassdiv.appendChild(forgetPassInput);
            //FORGET PASSWORD SEARCH BUTTON
            var searchButton=document.createElement('button');
            searchButton.textContent='Search';
            forgetPassdiv.appendChild(searchButton);

        }

    })
}