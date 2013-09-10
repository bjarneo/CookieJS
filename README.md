CookieJS
========
CookieJS - Just another small JavaScript library. Use this if you need to set/get/delete cookies.

**No jQuery needed.**

How to use:


###CookieJS.setCookie(name, value, expire, path, domain)
* name = cookie name
* value = value of the cookie
* expire = days before it expires
* path = path of the website. '/' for whole site.
<br />
Example:<br />
CookieJS.setCookie('lanugage', 'javascript', 30, '/');
<br /><br />

###CookieJS.getCookie(name);
Example:<br />
CookieJS.getCookie('language');
<br /><br />

###CookieJS.deleteCookie(name, path, domain);
Example:<br />
CookieJS.deleteCookie('language', '/');