chrome.runtime.onMessage.addListener(function (z, sender) {
    console.log('in pop up');
    console.log(JSON.parse(z));
    awesome(JSON.parse(z));
});



function awesome(z) {
    // Do something awesome!
    $('.chart').data('easyPieChart').update(z);
}

function clickHandler(e) {
    setTimeout(awesomeTask, 1000);
}

function main() {
    // $('.chart').easyPieChart({
    //   //your options goes here
    // });
}


$(function () {
    $('button').click(clickHandler);
    $('.chart').easyPieChart({
        size: 100,
        barColor: '#17d3e6',
        scaleColor: false,
        lineWidth: 10,
        trackColor: '#373737',
        animate: 2500,
        lineCap: 'circle',
        display: true,
        text: 'datad',
    })
});

$(document).ready(function () {
    console.log('ready');
    var link = document.getElementById("pat");
    link.addEventListener("click", function () {
        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.update(tab.id, {url: 'https://www.patreon.com/user?u=14707516'}, function() {

            });
        });
    }, false);
});