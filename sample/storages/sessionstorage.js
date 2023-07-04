// Set a value in sessionStorage
window.sessionStorage.setItem('myKey', 'myValue');

// Get a value from sessionStorage
const myValue = sessionStorage.getItem('myKey');

// Check if a value exists in sessionStorage
if (sessionStorage.getItem('myKey') !== null) {
  // Do something
}

// Remove a value from sessionStorage
window.sessionStorage.removeItem('myKey');

// Clear all values from sessionStorage
sessionStorage.clear();


let origin = window.location.origin;
