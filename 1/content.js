
// let observer = new MutationObserver(function(mutations) {
//     mutations.forEach(function(mutation) {
//       if (mutation.addedNodes) {
//         for (let i = 0; i < mutation.addedNodes.length; i++) {
//           let node = mutation.addedNodes[i];
//           if (node.tagName && (node.tagName.toLowerCase() == "img" || node.tagName.toLowerCase() == "video")) {
//             node.style.filter = "blur(20px)";
//           }
//         }
//       }
//     });
//   });
  
//   observer.observe(document.body, { childList: true, subtree: true });
  

// Blur the page if it contains pornographic content

if (document.body.innerText.match(/porn|sex/)) {
    document.body.style.filter = "blur(5px)";
  }

// Listen for messages from the background script
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     // If the message is to block pornographic content, blur the page
//     if (request.action === "blockPorn") {
//       document.body.style.filter = "blur(5px)";
//     }
//   });
  
//   // Send a message to the background script to check if the page should be blocked
//   chrome.runtime.sendMessage({action: "checkForPorn"});
  


// Listen for messages from the background script
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     // If the message is to block pornographic content, blur the page
//     if (request.action === "blockPorn") {
//       document.body.style.filter = "blur(5px)";
//       alert("Access to this website has been blocked.");
//     }
//   });
  
//   // Send a message to the background script to check if the page should be blocked
//   chrome.runtime.sendMessage({action: "checkForPorn"});
  