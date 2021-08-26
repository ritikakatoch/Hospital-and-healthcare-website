function validation(){

  var name = document.myform.name;
  var email = document.myform.email;
  var phone = document.myform.phone;
  var message = document.myform.message;
  
  if(allLetter(name)){
    if(ValidateEmails(email)){
      if(numeric(phone)){ 
      } 
    }
  }
    
return false;
}

function allLetter(name){ 
  // var letters = /^[A-Za-z]+$/;
  var letters = "[a-zA-Z]+\\.?";
  if(name.value.match(letters)){
    return true;
  }
  else{
    alert('Invalid Username!');
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
    alert("Invalid Email Address!");
    email.focus();
    return false;
  }
}

function numeric(phone){ 
  var letters = /^\d{10}$/;
  if(phone.value.match(letters)){
    alert('Form Successfully Submitted');
    window.location.reload()
    return true;
  }
  else{
    alert('Invalid Phone No.!');
    phone.focus();
    return false;
  }
}