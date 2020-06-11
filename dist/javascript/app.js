// Funtion expression to select elements 
const selectElement = (s) => document.querySelector(s);

// Open the menu on click 
selectElement('.open').addEventListener('click', () => selectElement('.nav-list').style.right = 0)

// Close the menu on click 
selectElement('.close').addEventListener('click', () => selectElement('.nav-list').style.right = '-26rem')