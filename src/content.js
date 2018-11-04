console.log('In a content script');
let message = '';

let articleText = document.querySelector('body');
let ref = document.querySelectorAll('a');

if('innerText' in articleText){
     message = articleText.innerText;
}


const getLocation = function (href) {
    const l = document.createElement('a');
    l.href = href;
    return l.host;
};
var cat = new Set();

for (let i = 0; i < ref.length; i++) {
    cat.add(getLocation(ref[i].href));
}

var dataPackage = {
    "d1" : JSON.stringify(Array.from(cat)),
    "d2" : message
};

chrome.runtime.sendMessage(dataPackage,  function(response){
});





