/*const form=document.gentElementyById('form');
const username =document.gentElementyById('username');
const password =document.gentElementyById('password');
const email =document.gentElementyById('email');
const passssword2 =document.gentElementyById('password2');

form.addEventListener('sumbit',(e)=>{
	e.preventDefault();
	
	checkInputs();
	
});
function checkInputs(){
	// get the values from the inputs
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = passssword2.value.trim();
	
	if(usernameValue === ''){
		//show error
		// add error class
		setErrorFor(username, 'username cannot be blank');
		
	}
		else{
			// add success class
		setSuccessFor(username); 
		
	}
	
}

function setErrorFor(input , message){
	const formControl = input.parentElment;
	const small = formControl.queryselector('small');
	small.innerText=message;
	formControl.className = 'form-control error' ;
}
function setSuccessFor(input){
	const formControl = input.parentElement; 
	formControl.className = 'form-control success';
	
}






*/

var myInput = document.getElementsByClassName("input").createAttribute("required");


myInput.value = "";





