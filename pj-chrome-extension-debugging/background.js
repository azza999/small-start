/*
chrome.tabs.create({
    active: true,
    index: 0,
    url: 'https://www.naver.com',
}, async (tabid) => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: ()=>{console.log(tabid)}
    })
});

*/