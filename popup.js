chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting == "hello")
        sendResponse({farewell: "goodbye"});
    

    $(document).ready(function() {
        $(function() {
            $('.chart').easyPieChart({
                //your options goes here
            });
        });
    });
      
      function myFunction() {
        alert('hi');
      }
    });