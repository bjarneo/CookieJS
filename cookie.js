/**
 *  CookieJS - Just another small JavaScript library. Use this if you need to set/get/delete cookies.
 *  Website: http://www.codephun.com
 *  Twitter: http://www.twitter.com/bjarneo_
 *  Copyright (c) 2013, Bjarne Øverli
 *  Licensed under the MIT license,
 *  http://www.opensource.org/licenses/MIT
 */

var CookieJS =
{
    /**
     * Set cookie.
     * @param params.name - cookie name
     * @param params.value - cookie value
     * @param params.expires - Expires (days)
     * @param params.path - Set path. '/' for the whole website.
     * @param params.domain - Set domain
     * @param params.secure - Use SSL when sending the cookie to the server
     * @param params.httpOnly -  Using the HttpOnly flag when generating a cookie helps mitigate the risk of client side script accessing the protected cookie (if the browser supports it). (https://www.owasp.org/index.php/HttpOnly)
     */
    setCookie: function(params) {
        var cookie = params.name + '=' + encodeURI(params.value) + ';';
        if (params.expires) {
            params.expires = new Date(new Date().getTime() + parseInt(params.expires) * 1000 * 60 * 60 * 24);
            cookie += 'expires=' + params.expires.toUTCString() + ";";
        }
        cookie += (params.path) ? 'path=' + params.path + ';' : '';
        cookie += (params.domain) ? 'domain=' + params.domain + ';' : '';
        cookie += (params.secure) ? 'secure;' : '';
        cookie += (params.httpOnly) ? 'httpOnly;' : '';

        document.cookie = cookie;
    },

    /**
     * Get cookie
     * @param name - cookie name
     * @returns value - cookie value
     */
    getCookie: function(name) {
        var parts = document.cookie.split(name + '=');
        if (parts.length == 2) {
            return decodeURI(parts.pop().split(';').shift());
        }
    },

    /**
     * Get all cookies (if any)
     * @returns object cookies
     */
    getCookies: function () {
        var cookies = {},
            allCookies = document.cookie;

        if(allCookies === '') {
            return cookies;
        }

        var list = allCookies.split('; '),
            len = list.length;

        while(len--) {
            var cookie = list[len].split('=');
            cookies[cookie[0]] = decodeURI(cookie[1]);
        }

        return cookies;
    },

    /**
     * Check if cookie exists
     * @param name - cookie name
     */
    hasCookie: function(name) {
        if(CookieJS.getCookie(name)) {
            return true;
        }
        return false;
    },

    /**
     * Delete cookie
     * @param params.name - cookie name
     * @param params.path - cookie path
     * @param params.domain - cookie domain
     */
    deleteCookie: function(params) {
        if (CookieJS.getCookie(params.name)) {
            CookieJS.setCookie({
                name: params.name,
                value: '',
                expires: -1,
                path: params.path,
                domain: params.domain
            });
        }
    }
};