const body = document.querySelector('body');

fetch('https://api.escuelajs.co/api/v1/users')
    .then(res => res.json())
    .then(users => {


        let array = users;
        console.log(array);

        function updateHTML() {
            function showCards() {
                body.innerHTML = '';
                array.forEach(user => {
                    body.innerHTML += `
                 <div class="card" id="${user.id}">
                    <img src="${user.avatar}" alt="User Avatar" class="avatar">
                    <div class="info">
                      <h2 class="name">${user.name}</h2>
                      <p class="email">${user.email}</p>
                      <p class="role">Role: ${user.role}</p>
                      <p class="dates">Created: ${user.creationAt}</p>
                      <button class="delete">DELETE</button>
                    </div>
                  </div>
            `
                })
            }

            showCards()

            const btnDelete = document.querySelectorAll('.delete')

            btnDelete.forEach((btn, index) => {
                btn.onclick = (event) => {
                    // console.log(event.target.parentNode.parentNode.id);
                    // console.log(event.target.parentElement.parentElement.id);
                    array = array.filter((user, i) => i !== index);
                    console.log(array);
                    console.log(index);
                    showCards()
                    updateHTML();
                }
            })
        }

        updateHTML();

    })
