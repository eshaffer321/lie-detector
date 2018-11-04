console.log('In a content script');


let ref = document.querySelectorAll('a');

const getLocation = function (href) {
    const l = document.createElement('a');
    l.href = href;
    return l.host;
};
var cat = new Set();

for (let i = 0; i < ref.length; i++) {
    //console.log(ref[i]);
    cat.add(getLocation(ref[i].href));
}


chrome.runtime.sendMessage(JSON.stringify(Array.from(cat)), function(response){

});



