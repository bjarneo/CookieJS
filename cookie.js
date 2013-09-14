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
     * @param params.expires - expires (days)
     * @param params.path - set path. '/' for the whole website.
     * @param params.domain - set domain
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
     * @param params.name - cookie name
     * @param params.path - cookie path
     * @param params.domain - cookie domain
     */
    deleteCookie: function(params) {
        if (CookieJS.getCookie(params.name)) {
            CookieJS.setCookie(params.name, "", -1, params.path, params.domain);
        }
    }
};