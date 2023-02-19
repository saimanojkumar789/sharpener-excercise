var form = document.querySelector('.form-control');

form.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault;
    localStorage.setItem('firstname',e.target.firstname.value);
    localStorage.setItem('lastname',e.target.lastname.value);
    localStorage.setItem('phonenumber',e.target.mobilenumber.value);
    localStorage.setItem('email',e.target.email.value);
}