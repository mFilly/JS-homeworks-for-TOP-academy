const getFormattedWelcomeMessage = () => {
	const message=document.querySelector('#welcome-message')
	message.textContent="Welcome to your <strong>beautiful</strong> website!"
};

// Sample usage - do not modify
console.log(getFormattedWelcomeMessage());