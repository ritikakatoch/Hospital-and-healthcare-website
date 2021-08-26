function donateValidation(){

	var fname = document.donation.fname;
    var lname = document.donation.lname;
	var email = document.donation.email;
	var phone = document.donation.phone;
    var address = document.donation.address;
    var zip = document.donation.zip;
    var cardno = document.donation.cardno;
    var cardname = document.donation.cardname;
    var year= document.donation.year;
    var code = document.donation.code;
    var amount = document.donation.amount;
	
	
	if(firstname(fname)){
		if(lastname(lname)){
		  if(ValidateEmail(email)){
			if(numeric(phone)){
				if(useraddress(address)){
					if(zipcode(zip)){
						if(cardnumber(cardno)){
							if(carduser(cardname)){
							 if( yearexp(year)){
								if(securityc(code)){
									if(donationamt(amount)){

									}
								} 
							 }	
							}
						}
					}
				}
			} 
		  }
		}
	}
		
return false;
}

function firstname(fname){ 
	var letters = "[a-zA-Z]+\\.?";
	if(fname.value.match(letters)){
		return true;
	}
	else{
		alert('Name must have alphabet characters only');
		fname.focus();
		return false;
	}
}

function lastname(lname){ 
	var letters = "[a-zA-Z]+\\.?";
	if(lname.value.match(letters)){
		return true;
	}
	else{
		alert('Name must have alphabet characters only');
		lname.focus();
		return false;
	}
}

function ValidateEmail(email){
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
	console.log(phone);
	if(phone.value.match(letters)){
		return true;
	}
	else{
		alert('Phone no. must have 10 numeric characters only');
		phone.focus();
		return false;
	}
}

function useraddress(address){ 
	var letters = "[A-Za-z0-9'\.\-\s\,]";
	if(address.value.match(letters)){
		return true;
	}
	else{
		alert('Provide proper address');
		address.focus();
		return false;
	}
}
function zipcode(zip){ 
	var letters = "^[1-9]{1}[0-9]{2}[0-9]{3}$";
	if(zip.value.match(letters)){
		return true;
	}
	else{
		alert('Invalid Zip');
		zip.focus();
		return false;
	}
}

function cardnumber(cardno){ 
	var letters="^5[1-5][0-9]{14}";
	if(cardno.value.match(letters)){
		return true;
	}
	else{
		alert('Invalid Card Number');
		cardno.focus();
		return false;
	}
}

function carduser(cardname){ 
	var letters ="[a-zA-Z]+\\.?";
	if(cardname.value.match(letters)){
		return true;
	}
	else{
		alert('Name must have alphabet characters only');
		cardname.focus();
		return false;
	}
}

function yearexp(year){ 
	var letters ="(202)[1-9]{1}";
	if(year.value.match(letters)){
		return true;
	}
	else{
		alert('Invalid year');
		year.focus();
		return false;
	}
}

function securityc(code){ 
	var letters ="^[0-9]{4,6}$";
	if(code.value.match(letters)){
		return true;
	}
	else{
		alert('Enter correct code');
		code.focus();
		return false;
	}
}

function donationamt(amount){ 
	var letters ="^[1-9][0-9]{1,10}$";
	if(amount.value.match(letters)){
		return true;
	}
	else{
		alert('Invalid amount');
		amount.focus();
		return false;
	}
}
