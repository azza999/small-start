let ver2hor = true;
let hor2ver = true;
let floatOption = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ ver2hor });
  chrome.storage.sync.set({ hor2ver });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});