
let alertButton = document.querySelector('.alert'),
formSignin = document.querySelector('.form-signin');
btn = document.querySelector('.btn'),
inputEmail = document.querySelector('#inputEmail'),
inputPassword = document.querySelector('#inputPassword');
alertButton.classList.toggle('hide');

const autorization = (function() {
    console.log(' самозапуск ' + alertButton.classList);
  
    function hideAlert (){
        console.log('test');
        alertButton.classList.remove('hide');
    }    
    function autorization() { 
       if((inputEmail.value == localStorage.getItem("login")) && (inputPassword.value == localStorage.getItem("password"))) {
           formSignin.classList.add('hide');
           console.log('All right!');
           
       } else {
        alertButton.classList.remove('hide');
        // hideAlert ();
        console.log('Hide alert!');
        
        
           }
        
    
    } 
 
    // function multiplyNumbers(numbers) { 
    //     let result = calculation(numbers, '*'); 
 
    //     console.log(result); 
    // } 
 
    // function addNumbers(numbers) { 
    //     let result = calculation(numbers, '+'); 
 
    //     console.log(result); 
    // } 

    function setLogAndPass(logpassobject){
        localStorage.setItem("login", logpassobject.login);
        localStorage.setItem("password", logpassobject.password);
    }

    function initComponent(){
        // setLogAndPass({login: '1', password: '2'});
        autorization();
        
        console.log('инициализация');
        
    }
 
    return { 
        // multiply: multiplyNumbers, 
        // add: addNumbers,
        setlogandpass: setLogAndPass,
        init: initComponent

    } 
})(); 
autorization.setlogandpass({login: '1', password: '2'});
btn.addEventListener('click', autorization.init);
 
// calculate.multiply([31, 42, 5, 34, 8]); // 1 770 720 
// calculate.add([1, 2, 5, 3, 1]); // 1 770 720 


