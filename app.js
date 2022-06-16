const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const firstValue = firstName.value.trim();
	const lastValue = lastName.value.trim();
	const mailValue = email.value.trim();
	const passValue = password.value.trim();
	
	if(firstValue === '') {
		setErrorFor(firstName, 'First Name cannot be empty');
	} else {
		setSuccessFor(firstName);
	}
		
	if(lastValue === '') {
		setErrorFor(lastName, 'Last Name cannot be empty');
	} else {
		setSuccessFor(password);
	}

	if(mailValue === '') {
		setErrorFor(email, 'look like this is not an email');
	}else {
		setSuccessFor(email);
	}
    if(passValue === '') {
		setErrorFor(password, 'password cannot be empty');
	} else {
		setSuccessFor(password);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
