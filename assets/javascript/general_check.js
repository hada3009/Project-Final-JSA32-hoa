function scrollup() {
    document.documentElement.scrollTop = 0;
}

function next(){
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = "back" + "=" + "mi" + ";" + expires + ";path=/"
}

function log_out(){
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = "state" + "=" + "false" + ";" + expires + ";path=/";
    let h=check()
}

function check(){
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    let state = getstate();
    let u = getCookie_u_now()
    if (state=="true"){
        document.getElementById("acc").style.position="static"
        document.getElementById("Si_Su").style.position="absolute"
        document.getElementById("Si_Su").style.top="-50px"
        document.getElementById("it").innerHTML=u
    }
    else if(state=="false"){
        document.getElementById("Si_Su").style.position="static"
        document.getElementById("acc").style.position="absolute"
        document.getElementById("acc").style.top="-50px"
    }
}

function getstate() {
    let newstate = "state" + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(newstate) == 0) {
            if (c.substring(newstate.length, c.length)=="true"){
                return "true"
            }
            else{
                return "false"
            }
        }
    }
    return "false";
}

function getCookie_u_now() {
    let name = "u" + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// review
function getCookie_t_now() {
    let text_m = "re1" + "=";
    let cta = document.cookie.split(';');
    for(let i = 0; i < cta.length; i++) {
        let ct = cta[i];
        while (ct.charAt(0) == ' ') {
            ct = ct.substring(1);
        }
        if (ct.indexOf(text_m) == 0) {
            return ct.substring(text_m.length, ct.length);
        }
    }
    return "";
}

function mailstate(){
    let mail = "b1" + "=";
    let cga = document.cookie.split(';');
    for(let i = 0; i < cga.length; i++) {
        let cg = cga[i];
        while (cg.charAt(0) == ' ') {
            cg = cg.substring(1);
        }
        if (cg.indexOf(mail) == 0) {
            if (cg.substring(mail.length, cg.length)=="true"){
                return "true"
            }
            else{
                return "false"
            }
        }
    }
    return "";
}

function review(){
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    const re = document.getElementById("review").value;
    if (re == ""){
        alert("please type something")
        return ""
    } 
    document.cookie = "re1" + "=" + re + ";" + expires + ";path=/";
    document.cookie = "b1" + "=" + true + ";" + expires + ";path=/";
    let gfc = mailcheck()
    alert(re)
}

function delete_review(){
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = "b1" + "=" + false + ";" + expires + ";path=/";
    let gfc = mailcheck()
}
