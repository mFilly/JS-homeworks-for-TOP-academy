const getNavbarElement = () => {
    return document.querySelector('#navbar') // TODO: get the element with id navbar
}

const getMainElement = () => {
    return document.querySelector('#main') // TODO: get the element with id main
}

const getAboutFromFooter = () => {
    return document.querySelector('#footer-wrapper .about') // TODO: get the the about link that's in the footer
}

const getTheParagraphElement = () => {
    return document.querySelector('p') // TODO: get the first paragraph element
}


// Sample usage - do not modify
console.log(getNavbarElement());
console.log(getMainElement());
console.log(getAboutFromFooter());
console.log(getTheParagraphElement());