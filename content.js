console.log('In a content script');

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log(response.farewell);
});

let ref = document.querySelectorAll('a');

for (let i = 0; i < ref.length; i++) {
    console.log(ref[i].href);

}
