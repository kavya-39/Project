const form=document.getElementById("registrationForm");
const message=document.getElementById("message");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const phone=document.getElementById("phone").value.trim();

    if(name===""||email===""||phone===""){
        message.textContent="Please fill the details";
        return;
    }
    if(!email.includes("@")||!email.includes(".")){
        message.textContent="Please enter valid email";
        return;
    }
    if(!/^[0-9]{10}$/.test(phone)){
        message.textContent="Enter the correct phone number";
        return;
    }
    message.textContent="Registration details! Name " + name +" Email: " +email+" Phone :"+ phone ;
});
form.addEventListener("reset",function(){
    message.textContent="";
});
