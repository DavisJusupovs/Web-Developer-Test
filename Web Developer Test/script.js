  const form=document.getElementById("middle");
  const email=document.getElementById("email");
  const errorMessage=document.getElementById('error');
  const button= document.getElementsByClassName("button");
  const checkbox=document.getElementById("check");
  const filter="[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+";
  const cup=document.getElementById("thanks");

form.addEventListener('submit',(e)=>{
  let message=[];
if(email.value===''){
      button.disabled = true;
      message.push("Email address is required");
}else if(!checkbox.checked){
  button.disabled=true;
  message.push("You must accept the terms and conditions");
}else if(!email.value.match(filter)) {
      button.disabled = true;
      message.push("Please provide a valid e-mail address");  
}


if(message.length>0){
      e.preventDefault();
      errorMessage.innerText=message.join(',');
  }else{
    form.remove();
    button.disabled = false;
    cup.hidden=false;
  }
});


