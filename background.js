/** Run once when first installed */
chrome.runtime.onInstalled.addListener(function () {
    console.log('Successfully Installed.');
});

/** Incoming message from the content.js */
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.greeting == "hello")
            sendResponse({farewell: "goodbye"});
    });