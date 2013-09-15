CookieJS
========
CookieJS - Just another small JavaScript library. Use this if you need to set/get/delete cookies.

**No jQuery needed.**

How to use:
* name = cookie name
* value = value of the cookie
* expire = days before it expires
* path = path of the website. '/' for whole site.
* domain = ex: domain.com. If not set, it would be available for all subdomains.
* secure = Use SSL when sending the cookie to the server

####CookieJS.setCookie({name: '', value: '', expires: '', path: '', domain: '', secure: true/false})
```javascript
CookieJS.setCookie({
        name: 'mycookie',
        value:'myvalue',
        expires: 30,
        path: '/'
        domain: 'domain.com',
        secure: true
});
```

####CookieJS.getCookie(name);
```javascript
CookieJS.getCookie('mycookie');
```

####CookieJS.getCookies(void); Return all cookies.
```javascript
//Example:
var cookies = CookieJS.getCookies();
console.log(cookies.mycookie);
// Output: myvalue
```

####CookieJS.deleteCookie({name: '', path: '', domain: ''});
```javascript
CookieJS.deleteCookie({
        name: 'mycookie',
        path: '/'
});
```