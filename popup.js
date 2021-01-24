const addButton = document.querySelector('.addButton');
const urlButton = document.querySelector('.urlButton');
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
        removeButton.innerHTML = "DONE";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(removeButton);

        removeButton.addEventListener('click', () => this.remove(itemBox, itemName));
    }

    remove(item, input) {
        chrome.storage.local.get("tasks", res => {
            console.log(res.tasks)
            const toRemove = res.tasks.indexOf(input);
            res.tasks.splice(toRemove, 1);
            console.log(res.tasks);
            chrome.storage.local.set({
                "tasks": res.tasks
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
        new item(input.value);
        taskCount++;
        chrome.storage.local.get("tasks", res => {
            if (res.tasks == undefined) {
                chrome.storage.local.set({
                    "tasks": [input.value]
                })
            }
            else {
                res.tasks.push(input.value);
                chrome.storage.local.set({
                    "tasks": res.tasks
                })
            }
            input.value = "";
        })
        
    }
}

urlButton.addEventListener('click', () => {
    chrome.tabs.create({'url': "/options.html" } )
});


addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
})

window.onload = function(){
    chrome.storage.local.get("tasks", res => {
        if (res == undefined) {
            chrome.storage.local.set({
                "tasks": []
            });
        }
        else {
            for(let i = 0; i < res.tasks.length; i++) {
                new item(res.tasks[i]);
            }
        }
        
    })
}

//new item("Sports");