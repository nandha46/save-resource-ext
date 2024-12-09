console.log(document.getElementById("openBrowser"));
document.getElementById("OpenBrowser").addEventListener(
    'click', () => {
        chrome.tabs.create({ url: chrome.runtime.getURL("bookmark_browser.html") })
    }
  );
