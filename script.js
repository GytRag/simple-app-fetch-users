const body = document.querySelector('body');

fetch('https://api.escuelajs.co/api/v1/users')
    .then(res => res.json())
    .then(users => {
        console.log(users);

        users.forEach(user => {
            body.innerHTML += `
                 <div class="card">
                    <img src="${user.avatar}" alt="User Avatar" class="avatar">
                    <div class="info">
                      <h2 class="name">${user.name}</h2>
                      <p class="email">${user.email}</p>
                      <p class="role">Role: ${user.role}</p>
                      <p class="dates">Created: ${user.creationAt}</p>
                    </div>
                  </div>
            `
        })



    })