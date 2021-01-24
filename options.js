const addButton = document.querySelector('.addButton');
let input = document.querySelector('.input');
const container = document.querySelector('.container');
let taskCount = 0;

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(removeButton);

        removeButton.addEventListener('click', () => this.remove(itemBox, itemName));
    }

    remove(item, input) {
        chrome.storage.local.get("sites", res => {
            console.log(res.sites)
            const toRemove = res.sites.indexOf(input);
            res.sites.splice(toRemove, 1);
            console.log(res.sites);
            chrome.storage.local.set({
                "sites": res.sites
            });
        })
        container.removeChild(item);
        taskCount--;
        if(taskCount == 0){
            document.getElementById()
        }
        
    }
}

function check(){
    console.log("hello");
    if(input.value != ""){
        console.log("success");
        input.value.concat("/*")
        new item(input.value);
        taskCount++;
        chrome.storage.local.get("sites", res => {
            if (res.sites == undefined) {
                chrome.storage.local.set({
                    "sites": [input.value]
                })
            }
            else {
                res.sites.push(input.value);
                chrome.storage.local.set({
                    "sites": res.sites
                })
            }
            input.value = "";
        })
        
    }

}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
})

window.onload = function(){
    chrome.storage.local.get("sites", res => {
        if (res == undefined) {
            chrome.storage.local.set({
                "sites": []
            });
        }
        else {
            for(let i = 0; i < res.sites.length; i++) {
                new item(res.sites[i]);
            }
        }
        
    })
}

//new item("Sports");