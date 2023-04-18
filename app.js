function validation() {
    var isValid = true;
  
    var name = document.getElementById("name").value;
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var confirmpass = document.getElementById("conpass").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var emails = document.getElementById("email").value;
  
    if (name == "") {
      document.getElementById("Name").innerText = " ** Please fill the Name field";
      isValid = false;
    } else {
      document.getElementById("Name").innerText = "";
    }
  
    if (emails == "") {
      document.getElementById("emailids").innerText = " ** Please fill the email id field";
      isValid = false;
    } else if (emails.indexOf("@") <= 0) {
      document.getElementById("emailids").innerText = " ** Invalid Email";
      isValid = false;
    } else if (
      emails.charAt(emails.length - 4) != "." &&
      emails.charAt(emails.length - 3) != "."
    ) {
      document.getElementById("emailids").innerText = " ** Invalid Email";
      isValid = false;
    } else {
      document.getElementById("emailids").innerText = "";
    }
  
    if (user == "") {
      document.getElementById("Username").innerText = " ** Please fill the username field";
      isValid = false;
    } else if (user.length <= 3 || user.length > 20) {
      document.getElementById("Username").innerText =
        " ** Username length must be between 3 and 20";
      isValid = false;
    } else if (!isNaN(user)) {
      document.getElementById("Username").innerText =
        " ** Only characters are allowed";
      isValid = false;
    } else {
      document.getElementById("Username").innerText = "";
    }
  
    if (pass == "") {
      document.getElementById("password").innerText = " ** Please fill the password field";
      isValid = false;
    } else if (pass.length <= 5 || pass.length > 20) {
      document.getElementById("password").innerText =
        " ** Passwords length must be between 5 and 20";
      isValid = false;
    } else {
      document.getElementById("password").innerText = "";
    }
  
    if (pass != confirmpass) {
      document.getElementById("confrmpass").innerText =
        " ** Password Mismatch";
      isValid = false;
    } else if (confirmpass == "") {
      document.getElementById("confrmpass").innerText =
        " ** Please fill the confirmpassword field";
      isValid = false;
    } else {
      document.getElementById("confrmpass").innerText = "";
    }
  
    if (mobileNumber == "") {
      document.getElementById("mobileno").innerText =
        " ** Please fill the mobile Number field";
      isValid = false;
    } else if (isNaN(mobileNumber)) {
      document.getElementById("mobileno").innerText =
        " ** User must write digits only, not characters";
      isValid = false;
    } else if (mobileNumber.length != 10) {
      document.getElementById("mobileno").innerText =
        " ** Mobile Number must be 10 digits only";
      isValid = false;
    } else {
      document.getElementById("mobileno").innerText = "";
    }
  
    return isValid;
  }