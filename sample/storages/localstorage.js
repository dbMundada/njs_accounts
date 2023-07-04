// Set a value in localStorage
localStorage.setItem('myKey', 'myValue');

// Get a value from localStorage
const myValue = localStorage.getItem('myKey');

// Check if a value exists in localStorage
if (localStorage.getItem('myKey') !== null) {
  // Do something
}

// Remove a value from localStorage
window.localStorage.removeItem('myKey');

// Clear all values from localStorage
localStorage.clear();
