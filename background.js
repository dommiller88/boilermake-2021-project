const url = 'https://www.desmos.com/*'
const url2 = 'https://www.gradescope.com/*'
chrome.storage.local.set({
    "sites": [url, url2]
});


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.storage.local.get("sites", sites => {
        chrome.storage.local.get("tasks", res => {
            console.log(res.tasks);
            if (res.tasks.length > 0) {
                for (i = 0; i < sites.sites.length; i++) {
                    if (changeInfo.url != null && changeInfo.url.match(sites.sites[i])) {
                        chrome.tabs.update(null, {active: true, url:"http://boilermake-2021.s3-website-us-east-1.amazonaws.com/"}, function(tab){});
                    }
                }
            }
        })
        
    });
    
    
})

/*
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.storage.local.get("tasks", res => {
        console.log(res.tasks);
    })
})
*/
