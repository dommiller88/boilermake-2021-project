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

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itemBox));
    }

    edit(input) {
        input.disabled = !input.disabled;
    }

    remove(item) {
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

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
})

//new item("Sports");