const url = 'https://www.desmos.com/*'
const url2 = 'https://www.gradescope.com/*'
chrome.storage.local.set({
    "sites": [url, url2]
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.storage.local.get("sites", sites => {
        console.log(sites.sites.length);
        console.log(changeInfo.url);
        for (i = 0; i < sites.sites.length; i++) {
            console.log(sites.sites[i]);
            if (changeInfo.url != null && changeInfo.url.match(sites.sites[i])) {
                console.log("match")
                chrome.tabs.update(null, {active: true, url:"http://boilermake-2021.s3-website-us-east-1.amazonaws.com/"}, function(tab){});
            }
        }
    });
    
    
})



//chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => console.log("Here I am"));
console.log("from backend");