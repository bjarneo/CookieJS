CookieJS
========
CookieJS - Just another small JavaScript library. Use this if you need to set/get/delete cookies.

**No jQuery needed.**

How to use:
* name = cookie name
* value = value of the cookie
* expire = days before it expires
* path = path of the website. '/' for whole site.

####CookieJS.setCookie({name: '', value: '', expires: '', path: '', domain: ''})
```javascript
CookieJS.setCookie({
        name: 'mycookie',
        value:'myvalue',
        expires: 30,
        path: '/'
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