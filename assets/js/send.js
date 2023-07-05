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
    const call=fetch("https://my-test-api.vercel.app/post", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(post), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        } 
        })
        .then(res => res.json())
     
        .catch(error => console.error('Error:', error))

        .then(response => {
            alert("Mensaje enviado. Muchas gracias");
            document.location.href("/index.html");

        })
    })