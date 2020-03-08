function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "RISHABH" && password == "12345678"){
alert ("Login successfully");
window.location.href="loginsucess.html"
return false;
}
}