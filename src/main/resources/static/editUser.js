const editForm = document.getElementById("editModal");


async function editModal(id) {
    let editId = `${adminUrl}/${id}`;
    fetch(editId, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }).then(res => {
        res.json().then(user => {
            document.getElementById('editID').value = user.id;
            document.getElementById('editName').value = user.name;
            document.getElementById('editSurname').value = user.surname;
            document.getElementById('editAge').value = user.age;
            document.getElementById('editEmail').value = user.email
            document.getElementById('editPassword').value = "";
            document.getElementById('editRoles').value
        })
    });

}


function editUser() {
    document.getElementById("editModal").addEventListener('submit', (e) => {

        e.preventDefault();

        let userRoles = [];
        for (let i = 0; i < editForm.editRoles.options.length; i++) {
            if (editForm.editRoles.options[i].selected) userRoles.push({
                name: "ROLE_" + editForm.editRoles.options[i].text
            });
        }

        let idValue = document.getElementById('editID').value;
        let nameValue = document.getElementById('editName').value;
        let surnameValue = document.getElementById('editSurname').value;
        let ageValue = document.getElementById('editAge').value;
        let emailValue = document.getElementById('editEmail').value
        let passwordValue = document.getElementById('editPassword').value;
        let user = {
            id: idValue,
            name: nameValue,
            surname: surnameValue,
            age: ageValue,
            email: emailValue,
            password: passwordValue,
            roles: userRoles
        }
        fetch(`${adminUrl}/${idValue}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(user)
        }).then(() => {
            getAdminPage()
            document.querySelector('button[id="editClose"]').click();
        })
    })
}

editUser()