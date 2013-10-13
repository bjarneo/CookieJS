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
    set: function(params) {
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
    get: function(name) {
        var parts = document.cookie.split(name + '=');
        if (parts.length == 2) {
            return decodeURI(parts.pop().split(';').shift());
        }
    },

    /**
     * Get all cookies (if any)
     * @returns object cookies
     */
    getAll: function () {
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
     * Get all keys
     * @returns array keys
     */
    keys: function() {
        var keys = [],
            allCookies = document.cookie;

        if(allCookies === '') {
            return keys;
        }

        var list = allCookies.split('; '),
            len = list.length;

        while(len--) {
            var key = list[len].split('=');
            keys[len] = key[0];
        }

        return keys;
    },

    /**
     * Check if cookie exists
     * @param name - cookie name
     */
    has: function(name) {
        if(this.get(name)) {
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
    delete: function(params) {
        if (this.get(params.name)) {
            this.set({
                name: params.name,
                value: '',
                expires: -1,
                path: params.path,
                domain: params.domain
            });
        }
    }
};