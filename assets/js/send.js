let form=document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre=document.getElementById("name");
    let email=document.getElementById("email");
    let asunto=document.getElementById("subject");
    let mensaje=document.getElementById("message");
    let post={
        "nombre": nombre.value,
        "email": email.value,
        "asunto": asunto.value,
        "mensaje": mensaje.value,

    }
    console.log(post);

  
});