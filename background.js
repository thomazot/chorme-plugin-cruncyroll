chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(tab.id, {
    code: `if(typeof ZotFullScreen === 'function') ZotFullScreen()`,
  })
})
