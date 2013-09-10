/**
 *
 *  CookieJS - Just another small JavaScript library. Use this if you need to set/get/delete cookies.
 *  Date: 10.09.2013
 *  Author: Bjarne Øverli
 *  Website: http://www.codephun.com
 *  Twitter: http://www.twitter.com/bjarneo_
 */

var CookieJS =
{
    /**
     * Set cookie.
     * @param name - cookie name
     * @param value - cookie value
     * @param expires - expires (days)
     * @param path - set path. '/' for the whole website.
     * @param domain - set domain
     */
    setCookie: function(name, value, expires, path, domain) {
        var cookie = name + "=" + encodeURI(value) + ";";
        if (expires) {
            expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);
            cookie += "expires=" + expires.toUTCString() + ";";
        }
        if (path) {
            cookie += "path=" + path + ";";
        }
        if (domain) {
            cookie += "domain=" + domain + ";";
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
            return parts.pop().split(";").shift();
        }
    },

    /**
     * Delete cookie
     * @param name - cookie name
     * @param path - cookie path
     * @param domain - cookie domain
     */
    deleteCookie: function(name, path, domain) {
        if (CookieJS.getCookie(name)) {
            CookieJS.setCookie(name, "", -1, path, domain);
        }
    }
};