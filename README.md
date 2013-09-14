CookieJS
========
CookieJS - Just another small JavaScript library. Use this if you need to set/get/delete cookies.

**No jQuery needed.**

How to use:


###CookieJS.setCookie({name: '', value: '', expire: '', path: '', domain: ''})
* name = cookie name
* value = value of the cookie
* expire = days before it expires
* path = path of the website. '/' for whole site.
<br />
```javascript
CookieJS.setCookie({
        name: 'mycookie',
        value:'myvalue',
        expires: 30,
        path: '/'
});
```
<br /><br />

###CookieJS.getCookie(name);
```javascript
CookieJS.getCookie('mycookie');
```
<br /><br />

###CookieJS.deleteCookie({name: '', path: '', domain: ''});
```javascript
CookieJS.deleteCookie({
        name: 'mycookie',
        path: '/'
});
```