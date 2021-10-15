const btn = document.querySelector(".btn");
const users = document.getElementById("users");

btn.addEventListener("click", getUsers);

function getUsers() {
    fetch("users.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let output = ""
        data.forEach(function(user) {
            output+= `
            <hr/>
            <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Email: ${user.email}</li>
            </ul>
            `
        })
        users.innerHTML = output;
    })
}