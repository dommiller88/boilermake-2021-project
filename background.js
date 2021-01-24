
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.storage.local.get("sites", sites => {
        chrome.storage.local.get("tasks", res => {
            console.log(res.tasks);
            if (res.tasks.length > 0) {
                for (i = 0; i < sites.sites.length; i++) {
                    if (changeInfo.url != null && changeInfo.url.match(sites.sites[i])) {
                        chrome.tabs.update(null, {active: true, url:"https://boilermake-2021.s3.amazonaws.com/error.html"}, function(tab){});
                    }
                }
            }
        })
        
    });
    
    
})


