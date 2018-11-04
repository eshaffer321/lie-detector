// let changeColor = document.getElementById('changeColor');
//
// chrome.storage.sync.get('color', function (data) {
//     changeColor.style.backgroundColor = data.color;
//     changeColor.setAttribute('value', data.color);
// });
// changeColor.onclick = function (element) {
//     console.log('im getting clicked');
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
//         chrome.tabs.executeScript(
//             tabs[0].id,
//             {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
// };
//
// document.addEventListener('DOMContentLoaded', function() {
//   console.log('hi');
// });
//
// chrome.runtime.onMessage.addListener(function (z, sender) {
//     console.log(JSON.parse(z));
//
// });

function awesome() {
    // Do something awesome!
    $('.chart').easyPieChart({
        //your options goes here
    });
}

function totallyAwesome() {
    // do something TOTALLY awesome!
}

function awesomeTask() {
    awesome();
    totallyAwesome();
}

function clickHandler(e) {
    setTimeout(awesomeTask, 1000);
}

function main() {
    // $('.chart').easyPieChart({
    //   //your options goes here
    // });
}


$(function() {
    $('button').click(clickHandler);
    $('.chart').easyPieChart({
        size: 100,
        barColor: '#17d3e6',
        scaleColor: false,
        lineWidth: 10,
        trackColor: '#373737',
        animate:2500,
        lineCap:'circle',
        display: true,
        text: 'datad',
    })
});