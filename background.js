const url = 'https://www.desmos.com/*'

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url != null && changeInfo.url.match(url)) {
        chrome.tabs.update(null, {active: true, url:"http://boilermake-2021.s3-website-us-east-1.amazonaws.com/"}, function(tab){});
    }
})

function block(tab) {

}

//chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => console.log("Here I am"));
console.log("from backend");