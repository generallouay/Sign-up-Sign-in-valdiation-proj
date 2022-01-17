const usernameOrEmailInput = document.getElementById('username123');
const passwordInp = document.getElementById('password123');
const logInBtn = document.querySelector('.loginBtn');
const errorMessage = document.getElementById('theErrorMessage')
const allInputs = document.getElementsByClassName('redStuff')
const allInputsToLoop = [...allInputs]

logInBtn.addEventListener('click' , userAttemptFunc)




function userAttemptFunc(param){
    param.preventDefault();
    allInputsToLoop.forEach(a => {
        if (a.value === "") {
          a.classList.add("inputsClass");

        } else {
            a.classList.remove("inputsClass");
        }
    });


    const userAttempt = {
        usernameOrEmail : usernameOrEmailInput.value,
        password : passwordInp.value
    }
    const {usernameOrEmail : inp , password : pass} = userAttempt;


    const allUsers = [];

    for (idx = 0 ; idx<localStorage.length; idx++){        
        const key = localStorage.key(idx);                  
        const value = JSON.parse(localStorage.getItem(key))           
        allUsers.push(value)
        
    };
    
 

    const result = allUsers.find(z => {
        if (z.username === inp){
            return z;
        }else if(z.email === inp){
            return z;
        }else false;

    });


    if (result === undefined){
        errorMessage.innerText = '' 
        errorMessage.innerText = 'invalid username or email' 
    }
    else{
        if (inp === result.username || inp === result.email){
           if (pass === result.password){
               logInSuccess(result.username);
           }else{
               errorMessage.innerText = '' 
               errorMessage.innerText = 'invalid password'
           }
       }
       else false;
    }


    // const result = allUsers.find( ({ username }) => username === usernameOrEmailInput.value );
    // const checkEmail = allUsers.find( ({ email }) => email === usernameOrEmailInput.value );
  
    // if (result || checkEmail){
    //     if (usernameOrEmailInput.value === result.username || usernameOrEmailInput.value === checkEmail.email){

    //         if (passwordInp.value === result.password){

    //            logInSuccess();
    //         //    result.username
    //         }else {
    //             errorMessage.innerText = '' 
    //             errorMessage.innerText = 'invalid password'
    //         }

    //     }else {
    //         errorMessage.innerText = ''
    //         errorMessage.innerText = 'invalid username or email' 

    //     }



    // }else{
    //     errorMessage.innerText = ''
    //     errorMessage.innerText = 'invalid username or email' 
    // }

}



function logInSuccess(bet){
    errorMessage.textContent = ''
    usernameOrEmailInput.value = ''
    passwordInp.value = ''
    setTimeout(function(){alert(`welcome back ${bet}`)}, 500)


}




