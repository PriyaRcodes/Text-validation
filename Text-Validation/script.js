function onSubmit(){
    var regex = /^[a-zA-Z]+$/;
    var fname = document.getElementById("fname_tb").value;
    var lname = document.getElementById("lname_tb").value;
    var result1 = regex.test(fname);
    var result2 = regex.test(lname);
    if(result1 && result2){
        document.getElementById("welcome_msg").innerHTML = "Welcome  "+fname+" !";
    }
}

function checkName(e, t) {
    try {
    if (window.event) {
        var charCode = window.event.keyCode;
    }
    else if (e) {
        var charCode = e.which;
    }
    else { return true; }
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
        return true;
    else if(charCode>=48 && charCode<=57){
        document.getElementById("error").innerHTML = "You have entered a digit!! Only aplhabets allowed.";                    
        return false;
    }
    else{
        document.getElementById("error").innerHTML = "Only alphabets allowed!";
    }
    }
    catch (err) {
        alert(err.Description);
    }
}
