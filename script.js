document.getElementById ("btnBuscar").addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users/3")
    .then(res => res.json())
    .then(usuario => {
        const jsonApiForm = {
            data: {
                type: "users",
                id: usuario.id,
                attributes: {
                nomeDoUsuario: usuario.name,
                emailDoUsuario: usuario.email,
                username: usuario.username
                }
            }
        };
        document.getElementById("saida").textContent =
        JSON.stringify (jsonApiForm, null, 4);
    });
});