document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggle-button');
    toggleButton.addEventListener('click', function() {
      chrome.storage.sync.set({ 'isBlocked': false }, function() {
        chrome.runtime.reload();
      });
    });
  });
  

  function updateTable(data) {
    const tableBody = document.getElementById('table-body');
    const newRow = tableBody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    cell1.innerHTML = data.dateTime;
    cell2.innerHTML = data.ip;
    cell3.innerHTML = data.provider;
    cell4.innerHTML = data.country;
    cell5.innerHTML = data.userAgent;
    cell6.innerHTML = data.referringUrl;
  }
  
  function trackIpLocation() {
    fetch('https://ipinfo.io/json')
      .then(response => response.json())
      .then(data => {
        console.log(data.ip);
        console.log(data.country);
        console.log(data.region);
        console.log(data.city);
        console.log(data.userAgent);
        const currentDate = new Date();
        const dateTime = currentDate.toLocaleString();
        const ip = data.ip;
        const provider = data.org;
        const country = data.country;
        const userAgent = navigator.userAgent;
        const referringUrl = document.referrer;
        const tableData = {
          dateTime,
          ip,
          provider,
          country,
          userAgent,
          referringUrl
        };
        updateTable(tableData);
      });
  }
  
  document.getElementById('track-link').addEventListener('click', trackIpLocation)