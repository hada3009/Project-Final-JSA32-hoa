let formSignUp=document.getElementById("Sign_Up_form")
formSignUp.addEventListener('submit',connectSignUp)

function connectSignUp(event){
    event.preventDefault();

    let username= document.getElementById("su_u").value.trim();
    let password= document.getElementById("su_p").value.trim();

    if(!username||!password){
        alert("vui lòng điền đầy đủ thông tin")
    }
    let user = {
        username: username,
        password: password
    }
    if(!localStorage.getItem("users")){
        let users= JSON.parse(localStorage.getItem("users"));
        users.push(person);
        localStorage.setItem()
    }
}
const url = "https://pokeapi.co/api/v2/pokemon/ditto"
fetch(url)
    .then(res => res.json())
    .then (data => console.log(data))
    .catch(error => console.log(error))