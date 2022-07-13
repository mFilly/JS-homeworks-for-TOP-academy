const logLinksTexts = () => {
	const links=document.querySelectorAll("a")
  return links.forEach(link => console.log(link.textContent));
}

// Sample usage - do not modify
logLinksTexts();