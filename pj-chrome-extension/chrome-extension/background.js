let ver2horState = true;
let hor2verState = true;
let floatOptionState = false;

chrome.storage.sync.set({ ver2horState });
chrome.storage.sync.set({ hor2verState });
chrome.storage.sync.set({ floatOptionState });

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ ver2horState });
  chrome.storage.sync.set({ hor2verState });
  chrome.storage.sync.set({ floatOptionState });
  // console.log('Default background color set to %cgreen', `color: ${color}`);
});