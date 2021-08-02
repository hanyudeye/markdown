// ==UserScript==
// @name         修改deepl 的样式
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.deepl.com/translator*
// @icon         https://www.google.com/s2/favicons?domain=deepl.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    let css=`
    header, .lmt__docTrans-tab-container , article ,footer {
            display: none;
        }


    `
    sleep(0.5)
    GM_addStyle(css)
    // Your code here...
})();
