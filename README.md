CookieJS
========

CookieJS. No jQuery needed.

How to use:



CookieJS.setCookie(name, value, expire, path, domain)

name = cookie name

value = value of the cookie

expire = days before it expires

path = path of the website. '/' for whole site.

Example:

CookieJS.setCookie('lanugage', 'javascript', 30, '/');



CookieJS.getCookie(name);

Example:

CookieJS.getCookie('language');



CookieJS.deleteCookie(name, path, domain);

Example:

CookieJS.deleteCookie('language', '/');