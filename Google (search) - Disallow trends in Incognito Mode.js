// ==UserScript==
// @name         testincognito_4 (USE THIS!)
// @namespace  http://tampermonkey.net/
// @version    0.3
// @description  enter something useful
// @match      https://www.google.com/*
// @grant       GM_getValue
// @grant       GM_setValue
// @copyright  2012+, You
// ==/UserScript==

var alreadyRun = GM_getValue("alreadyRun", false);

if (!alreadyRun && GM_info.isIncognito) {
    (function() {
        'use strict';

        // Function to extract the value of the data-spbu attribute
        function extractDataAttributeAndOpenLink(arg1) {
            var divElement = arg1.document.querySelector('div[data-spbu]');
            if (divElement) {
                var dataValue = divElement.getAttribute('data-spbu').trim();
                // console.log('Value of data-spbu attribute:', dataValue);
            }
            var linkUrl = dataValue + '&tis=0&noredirect=1'
            var popup = window.open(linkUrl, '_blank')
            setTimeout(function(){popup.close();},10)
            setTimeout(function(){arg1.close();},10)
            setTimeout(function(){location.reload();},50)
        }
        
        GM_setValue("alreadyRun", true);
        var popup_2 = window.open('https://www.google.com/preferences?hl=ru&fg=1#tabVal=1', '_blank')
        //setTimeout(function(){window.open().close();},100)
        //popup_2.addEventListener('load', function() {extractDataAttributeAndOpenLink(popup_2)});
        //popup_2.document.addEventListener('DOMContentLoaded', function() {extractDataAttributeAndOpenLink(popup_2)});
        popup_2.addEventListener('DOMContentLoaded', function() {extractDataAttributeAndOpenLink(popup_2)});
    })();
}
