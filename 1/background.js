



chrome.runtime.onInstalled.addListener(function() {
  // Load the URLs to block from blacklist.txt
  fetch(chrome.runtime.getURL('blacklist.txt'))
    .then(response => response.text())
    .then(data => {
      // Convert the data to an array of URLs
      const urlsToBlock = data.split('\n').map(url => url.trim());

      // Listen for requests
      chrome.webRequest.onBeforeRequest.addListener(
        // Block requests to URLs in the blacklist
        function(details) {
          if (urlsToBlock.some(url => details.url.includes(url))) {
            return {cancel: true};
          }
        },
        // Filters
        {urls: ["<all_urls>"]},
        // Blocking options
        ["blocking"]
      );
    });
});




