/** Run once when first installed */
chrome.runtime.onInstalled.addListener(function () {
    console.log('Successfully Installed.');
});

/** Incoming message from the content.js */
chrome.runtime.onMessage.addListener(
    function (request, sender) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        console.log(JSON.parse(request));
        console.log(biasCounts(JSON.parse(request)));
    });

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/BigMcLargeHuge/opensources/master/sources/sources.json", false);
xhr.send();

var result = xhr.responseText;
var biasCount = 0;

function biasCounts (sites) {
biasCount = 0;
for(let i = 0; i<sites.length; i++){
    if(result.includes(sites[i])){
        biasCount++;
        console.log(sites[i]);
    }
}
return biasCount;
};
// console.log(result);
