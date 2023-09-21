// ==UserScript==
// @name       Quora_1
// @namespace  http://tampermonkey.net/
// @version    0.1
// @description  Change default answer sorting
// @match      https://www.quora.com/*
// @copyright  2012+, You
// ==/UserScript==


function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}


window.scrollTo({ left: 0, top: document.body.scrollHeight});
setTimeout(function(){window.scrollTo({ left: 0, top: 0})}, 180)

setTimeout(function(){document.querySelector("button[style*='box-sizing: border-box; font: inherit; padding: 0px 10px; transition-property: box-shadow, background-color;']").click();}, 200)

waitForElm('.dom_annotate_question_answer_item_4').then(() => {
    setTimeout(function(){document.querySelector('.q-box.qu-zIndex--popover .q-click-wrapper.qu-p--medium + .q-click-wrapper.qu-p--medium').click();},50)
});