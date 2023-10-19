const form = document.getElementById("newUserForm");
newUserTab()
function newUserTab() {

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("Функция newUserTab вызвана")

        let userRoles = [];
        for (let i = 0; i < form.newRoles.options.length; i++) {
            if (form.newRoles.options[i].selected) userRoles.push({
                name: "ROLE_" + form.newRoles.options[i].text
            });
        }

        fetch(adminUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                name: document.getElementById('newName').value,
                surname: document.getElementById('newSurname').value,
                age: document.getElementById('newAge').value,
                email: document.getElementById('newEmail').value,
                password: document.getElementById('newPassword').value,
                roles: userRoles
            })

        })
            .then((response) => {
                if (response.ok) {
                    document.getElementById('newName').value = '';
                    document.getElementById('newSurname').value = '';
                    document.getElementById('newAge').value = '';
                    document.getElementById('newEmail').value = '';
                    document.getElementById('newPassword').value = '';
                    document.querySelector('a[href="#allUsers"]').click();
                    getAdminPage();
                }
            })
    })
}