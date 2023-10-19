const userUrl = 'http://localhost:8080/user';


function getPage(){
    fetch(userUrl).then(response => response.json()).then(user =>
        getInformation(user))
}

function getInformation(user) {

    const rolesString = JSON.stringify(user.roles);
    const parsed = JSON.parse(rolesString);
    const roleName = parsed.map(function (o){
        return o.name.replace("ROLE_", "");
    });

    document.getElementById('userInfoTable').innerHTML = `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.surname}</td>
            <td>${user.age}</td>
            <td>${user.email}</td>
            <td>${roleName}</td>
        </tr>`;

}

getPage();