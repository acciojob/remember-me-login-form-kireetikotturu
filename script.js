//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

let savedUser = JSON.parse(localStorage.getItem("user"));
if(savedUser){
	existingBtn.style.display="block";

	existingBtn.addEventListener("click", () => {
	  alert(`Logged in as ${savedUser.username}`);
    });
}

document.getElementById("loginForm").addEventListener("submit", 
													 ()=>{
														 const username = usernameInput.value;
														 const password = passwordInput.value;
														 alert(`Logged in as ${username}`)

														 if(checkbox.checked){
															 localStorage.setItem("user", JSON.stringify({username, password}))
															 existingBtn.style.display="block";
                                                         }else{
															 localStorage.removeItem("user");
															 existingBtn.style.display="none";
                                                         }
													 })


