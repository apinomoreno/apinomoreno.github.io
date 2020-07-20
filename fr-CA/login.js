/*Constant definition*/
const loginForm = document.getElementById("form");
const loginButton = document.getElementById("button-form");
/*Create an event listener and prevent submit the form*/
loginButton.addEventListener("click", (e) => {e.preventDefault();
/*Constant definition*/				
const username = loginForm.uname.value;
const password = loginForm.pwd.value;

if (username === "solar" && password === "system") {		
if (confirm("Voulez-vous vous connecter?")) {
	
window.open("../fr-CA/la-fin.html","_blank");
window.close();
} 
	else {}				  					
	location.reload();
} else {
alert("UPS! Vous avez mal tapé.");				
}
})
