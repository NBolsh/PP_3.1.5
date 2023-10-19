const adminUrl = 'http://localhost:8080/admin';



function getAdminPage(){
    fetch(adminUrl).
    then(response => response.json()).
    then(data => {getTable(data)})
}

function getTable(listOfUsers) {


    let res = ``;

    for (let user of listOfUsers) {
        let roleNames  = user.roles.map(role => role.name.replace("ROLE_", "")).join(', ')

        res +=
            `<tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.surname}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>${roleNames}</td>
               <td>
                    <button id="button-edit" class="btn btn-sm btn-primary" type="button"
                    data-bs-toggle="modal" data-bs-target="#modalEdit"
                    onclick="editModal(${user.id})">Edit</button></td>
                <td>
                    <button class="btn btn-sm btn-danger" type="button"
                    data-bs-toggle="modal" data-bs-target="#deleteModal"
                    onclick="deleteModal(${user.id})">Delete</button></td>
            </tr>`;
    }
    document.getElementById('AdminTable').innerHTML = res;

}


getAdminPage()