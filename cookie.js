/**
 *  CookieJS - Just another small JavaScript library. Use this if you need to set/get/delete cookies.
 *  Author: Bjarne Øverli
 *  Website: http://www.codephun.com
 *  Twitter: http://www.twitter.com/bjarneo_
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
     */
    setCookie: function(params) {
        var cookie = params.name + "=" + encodeURI(params.value) + ";";
        if (params.expires) {
            params.expires = new Date(new Date().getTime() + parseInt(params.expires) * 1000 * 60 * 60 * 24);
            cookie += "expires=" + params.expires.toUTCString() + ";";
        }
        if (params.path) {
            cookie += "path=" + params.path + ";";
        }
        if (params.domain) {
            cookie += "domain=" + params.domain + ";";
        }
        if(params.secure) {
            cookie += "secure;";
        }
        document.cookie = cookie;
    },

    /**
     * Get cookie
     * @param name - cookie name
     * @returns value - cookie value
     */
    getCookie: function(name) {
        var parts = document.cookie.split(name + "=");
        if (parts.length == 2) {
            return decodeURI(parts.pop().split(";").shift());
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