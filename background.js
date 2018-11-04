chrome.tabs.executeScript(tab.id, {
    file: "jquery.js",
    allFrames: true,
    runAt: "document_idle"
});

chrome.tabs.executeScript(tab.id, {
    file: "script.js",
    allFrames: true,
    runAt: "document_idle"
});
