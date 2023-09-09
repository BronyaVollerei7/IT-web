function login() {
    Swal.fire({
        title: "Login",
        html: `<center><table cellpadding="5px">
        <tr>
            <td><input type="text" id="username" class="swal2-input" placeholder="Username"></td>
        </tr>
        <tr>
            <td><input type="password" id="password" class="swal2-input" placeholder="Password"></td>
        </tr>
        </table></center>`,
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Cancel',
        preConfirm: () => {
            const username = Swal.getPopup().querySelector('#username').value
            const password = Swal.getPopup().querySelector('#password').value
            return {
                username,
                password
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                'type': 'POST',
                'url': '/action/login',
                'contentType': 'application/json',
                'data': JSON.stringify({
                    ...result.value
                }),
                'success': (data) => {
                    if (data === true) {
                        Swal.fire('Success', 'Berhasil', 'success')
                    } else {
                        Swal.fire('Erorr', 'Tidak', 'error')
                    }
                }
            })
        }
    })
}
