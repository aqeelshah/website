/* var firstName = document.querySelector("#firstname");
var lastName = document.querySelector("#lastname");
var emailbox = document.querySelector("#emailbox1");
var message = document.querySelector("#message");
var firstinput = firstName.value;
var lastinput = lastName.value;
var emailinput = emailbox.value;
var messageinput = message.value;
function smsg() {
    if (firstinput != "" && lastinput != "" && emailinput !="" && messageinput !="") {
        if (emailbox != '' && typeof (emailbox) == "string") {
            if (emailbox.includes("@") && emailbox.includes('.')) {
                Swal.fire('Success',"valid email", 'success');
            } else {
                Swal.fire('invalid',"invalid email", 'error');
            }
    }
         Swal.fire('Success',"Message sent", 'success');

    
}
else{
    Swal.fire('invalid',"fields are empty", 'error');
}
} */
function smsg() {
    var firstName = document.querySelector("#firstname").value;
    var lastName = document.querySelector("#lastname").value;
    var emailbox = document.querySelector("#emailbox1").value;
    var message = document.querySelector("#message").value;

    if (firstName != "" && lastName != "" && emailbox != "" && message != "") {
            if (emailbox.includes("@") && emailbox.includes('.')) {
                Swal.fire('Success', "message sent", 'success');
            } else {
                Swal.fire('Invalid', "Invalid email", 'error');
            }
    } else {
        Swal.fire('Invalid', "Fields are empty", 'error');
    }
}
