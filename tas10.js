var form = document.querySelector('#addForm');
var items = document.getElementById('items');
form.addEventListener('submit',onSubmit);
items.addEventListener('click',onClick);

function onSubmit(e){
    e.preventDefault();
    const myobj = {
        name : e.target.firstname.value,
        lastname : e.target.lastname.value,
        mobilenumber : e.target.mobilenumber.value,
        email : e.target.email.value
    }
    myobj_serialized = JSON.stringify(myobj);
    localStorage.setItem(myobj.email,myobj_serialized);
    var li = document.createElement('li');
    li.className="list-group-item"
    li.appendChild(document.createTextNode(`${myobj.name}   ${myobj.lastname}     ${myobj.mobilenumber}     ${myobj.email}`));
    var btn = document.createElement('button');
    btn.className=" delete";
    btn.style="float:right";
    btn.appendChild(document.createTextNode("delete"));
    li.appendChild(btn);
    items.appendChild(li);
}

function onClick(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            var email = li.textContent.split("   ")[3];
            localStorage.removeItem(email);
            items.removeChild(li);
        }
    }
}