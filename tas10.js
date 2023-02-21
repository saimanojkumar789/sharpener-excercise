var form = document.querySelector('.form-control');

form.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault;
    const myobj = {
        name : e.target.firstname.value,
        lastname : e.target.lastname.value,
        mobilenumber : e.target.mobilenumber.value,
        email : e.target.email.value
    }
    myobj_serialized = JSON.stringify(myobj);
    localStorage.setItem('myobj',myobj_serialized);
}