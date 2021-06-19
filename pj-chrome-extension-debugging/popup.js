async function main() {
    // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // console.log(tab)
    // chrome.scripting.executeScript({
    //     target: { tabId: tab.id },
    //     function: ()=>{console.log("access")}
    // })

    chrome.tabs.query({
        active:true
    }, async (tabid) => {
        console.log(tabid)
    })

    chrome.tabs.query({
        highlighted:true
    }, async (tabid) => {
        console.log(tabid)
    })
}

main()