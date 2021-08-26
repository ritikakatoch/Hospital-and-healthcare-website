function formValidation(){

	var name = document.registration.name;
	var email = document.registration.email;
	var phone = document.registration.phone;
	var app = document.registration.appointment;
	
	if(allLetter(name)){
		if(ValidateEmails(email)){
			if(numeric(phone)){ 
				if(appselect(app)){
				}
			} 
		}
	}
		
return false;
}

function allLetter(name){ 
	var letters = "[a-zA-Z]+\\.?";
	if(name.value.match(letters)){
		return true;
	}
	else{
		alert('Username must have alphabet characters only');
		name.focus();
		return false;
	}
}

function ValidateEmails(email){
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(mailformat)){
		return true;
	}
	else{
		alert("You have entered an invalid email address!");
		email.focus();
		return false;
	}
}

function numeric(phone){ 
	var letters = /^\d{10}$/;
	if(phone.value.match(letters)){
		return true;
	}
	else{
		alert('Phone no. must have 10 numeric characters only');
		phone.focus();
		return false;
	}
}

function appselect(app){
	if(app.value == "appointment"){
		alert('Select your Time from the list');
		app.focus();
		return false;
	}
	else{
		alert('Form Successfully Submitted');
		window.location.reload()
		return true;
	}
}

