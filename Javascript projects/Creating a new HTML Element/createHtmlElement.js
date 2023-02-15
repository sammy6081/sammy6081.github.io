var list = document.getElementById('todo-list');
var addBtn = document.getElementById('add-list');
var addTask = document.getElementById('task-input');
var updateItem = document.getElementById('update');
var removeItem = document.getElementById('remove');

var currentInputValue = ""
addTask.addEventListener('input', function(e){
    currentInputValue = e.target.value;
});

addTask.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        addListItem();
    }
});

function createNewNode(){
        var newListElement = document.createElement('li');
        var textNode = document.createTextNode(currentInputValue);
        newListElement.appendChild(textNode);
        newListElement.id = 'task-input' + (list.childElementCount + 1);
        
        return newListElement
};

function addListItem(){
    if(currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== ""){
    var newListElement = createNewNode();

    
        list.appendChild(newListElement);
        console.log(list.childElementCount);
    
        addTask.value = ""
        currentInputValue = ""
    }
    else {
        alert('please enter a valid ToDo item');
    }
}

addBtn.addEventListener('click', addListItem);

updateItem.addEventListener('click', function(){
    var firstElement  = list.firstElementChild;
    var newListElement = createNewNode();

    list.replaceChild(newListElement, firstElement);
});
removeItem.addEventListener('click', function(){
    var firstElement  = list.firstElementChild;

    list.removeChild(firstElement);
});