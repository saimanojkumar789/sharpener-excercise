var form = document.getElementById('addForm');
var items = document.getElementById('items');
var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var contact = document.getElementById('mobilenumber');
var email = document.getElementById('email');

form.addEventListener('submit',onsubmit);

items.addEventListener('click',onclick);

function onsubmit(e){
    e.preventDefault();
    const myobj = {
        name : e.target.firstname.value,
        lastname : e.target.lastname.value,
        mobilenumber : e.target.mobilenumber.value,
        email : e.target.email.value
    }
    let myobj_serialized = JSON.stringify(myobj);
    localStorage.setItem(myobj.email,myobj_serialized);

    var li = document.createElement('li');
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(`${myobj.name} - ${myobj.lastname} - ${myobj.mobilenumber} - ${myobj.email} - `));

    var edit  = document.createElement('button');
    edit.className = "edit";
    edit.style = "float:right";
    edit.appendChild(document.createTextNode("Edit"));
    li.appendChild(edit);
    
    var btn = document.createElement('button');
    btn.className = "delete";
    btn.style = "float:right";
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(btn);


    items.appendChild(li);
}

function onclick(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            var mail = e.target.parentNode.textContent.split(" - ")[3];
            removeitem(li,mail);
        }
    }

    if(e.target.classList.contains('edit')){
        var arr = e.target.parentElement.textContent.split(" - ");
        var li = e.target.parentElement;
        firstname.value = arr[0];
        lastname.value = arr[1];
        contact.value = arr[2];
        email.value = arr[3];
        removeitem(li,email.value);
    }
}

function removeitem(li,mail){
    localStorage.removeItem(mail);
    items.removeChild(li);
}