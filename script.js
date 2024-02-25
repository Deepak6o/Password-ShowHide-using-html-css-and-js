const Showpass = document.getElementById("Showpass");
const eyeopenclose = document.getElementById("openclose")

function OpenEye(){
  if(Showpass.type=="password")
  {
    Showpass.type="text";
    eyeopenclose.src="images/eye-open.png";
  }
  else{
    Showpass.type="password";
    eyeopenclose.src="images/eye-close.png";
  }
}