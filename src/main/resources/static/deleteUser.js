
async function deleteModal(id) {

    let delId = `${adminUrl}/${id}`;
    fetch(delId, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }).then(res => {
        res.json().then(user => {
            document.getElementById('deleteID').value = user.id
            document.getElementById('deleteName').value = user.name;
            document.getElementById('deleteSurname').value = user.surname;
            document.getElementById('deleteAge').value = user.age;
            document.getElementById('deleteEmail').value = user.email
            document.getElementById('deleteRoles').value
        })
    });
}

function deleteUser() {

    document.getElementById("modalDelete").addEventListener('submit', (e) => {
        e.preventDefault();

        const id = document.getElementById('deleteID').value
        let urlDel = `${adminUrl}/${id}`;

        let method = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(urlDel, method).then(() => {
            getAdminPage()
            document.querySelector('button[id="deleteButton"]').click();
        })
    })
}

deleteUser()