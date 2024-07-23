function changetext(){
    let nameinput = document.getElementById("yourname");
    let greetingmsg = document.getElementById("wishmsg");
    par.textContent = "next page loading";
}

let name = nameInput.value;
let greetingmsg = document.getElementById("wishing");
if(name){
    greetingmsg.textContent ='hwllo  $(name) all th best to you '
}
else{
    greetingmsg.textContent = "please  enter the nsme";
}

let button = document.getElementById("wishbutton");
button.addEventListener("click",wishing);