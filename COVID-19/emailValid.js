function ValidateEmail(){
    var email = document.subscribe.email;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(mailformat)){
        alert('Subscribed Successfully!!');
		window.location.reload()
		return true;
	}
	else{
		alert('Invalid Email');
		email.focus();
		return false;
	}
}