let formSignUp=document.getElementById("Sign_In_form")
formSignUp.addEventListener('submit',connectSignUp)

function connectSignUp(event){
    event.preventDefault();

    let username= document.getElementById("si_1").value.trim();
    let password= document.getElementById("si_2").value.trim();

    if(!username||!password){
        alert("vui lòng điền đầy đủ thông tin")
    }

    let users= JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.username && u.password )

    if(users){
        alert("đăng nhập thành công")
    }
}