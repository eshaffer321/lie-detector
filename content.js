console.log('In a content script');

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log(response.farewell);
});

let ref = document.querySelectorAll('a');

const getLocation = function (href) {
    const l = document.createElement('a');
    l.href = href;
    return l.host;
};
var cat = new Set();

for (let i = 0; i < ref.length; i++) {
    //console.log(ref[i]);
    console.log(getLocation(ref[i].href));
    cat.add(getLocation(ref[i].href));
}

console.log(cat);
