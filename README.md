CookieJS
========
CookieJS - Just another small JavaScript library. Use this if you need to set/get/delete cookies.

**No jQuery needed.**

How to use:
* name = cookie name
* value = value of the cookie
* expire = days before it expires
* path = path of the website. '/' for whole site.
* (Optional) domain = ex: domain.com. If not set, it would be available for all subdomains.
* (Optional) secure = Use SSL while transferring cookie to server
* (Optional) httpOnly -  Using the HttpOnly flag when generating a cookie helps mitigate the risk of client side script accessing the protected cookie (if the browser supports it). (https://www.owasp.org/index.php/HttpOnly)

####CookieJS.set({name: '', value: '', expires: '', path: '', domain: '', secure: true/false, httpOnly: true/false});
```javascript
CookieJS.set({
        name: 'mycookie',
        value:'myvalue',
        expires: 30, // x Days
        path: '/', // Website path
        domain: 'domain.com', // Optional
        secure: true, // Optional
        httpOnly: false // Optional
});
```

####CookieJS.get(name);
```javascript
CookieJS.get('mycookie');
```

####CookieJS.getAll(void); Return all cookies.
```javascript
//Example:
var cookies = CookieJS.getAll();
console.log(cookies.mycookie);
// Output: myvalue
```

####CookieJS.keys(void); Return all cookie keys.
```javascript
//Example:
var cookies = CookieJS.keys();
console.log(cookies[0]);
// Output: mycookie
```

####CookieJS.has(name);
```javascript
CookieJS.has('mycookie');
//Output: returns true or false
```

####CookieJS.delete({name: '', path: '', domain: ''});
```javascript
CookieJS.del({
        name: 'mycookie',
        path: '/'
});
```
