// Set a cookie with a name, value, expiration date, and path
function setCookie(name, value, expires, path) {
    let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    
    if (expires) {
      const expirationDate = new Date(expires);
      const formattedExpires = expirationDate.toUTCString();
      cookie += '; expires=' + formattedExpires;
    }
    
    if (path) {
      cookie += '; path=' + path;
    }
    
    document.cookie = cookie;
  }
  
  // Get a cookie by name
  function getCookie(name) {
    const cookies = document.cookie.split('; ');
    
    for (let i = 0; i < cookies.length; i++) {
      const [cookieName, cookieValue] = cookies[i].split('=');
      const decodedCookieName = decodeURIComponent(cookieName);
      
      if (decodedCookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    
    return null;
  }
  
  // Delete a cookie by name
  function deleteCookie(name) {
    setCookie(name, '', new Date(0), '/');
  }
  
  // Example usage
  setCookie('myCookie', 'myValue', 'Sat, 31 Dec 2022 23:59:59 GMT', '/');
  const myCookieValue = getCookie('myCookie');
  deleteCookie('myCookie');
  