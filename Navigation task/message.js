
function link_page(sectionId) {
    window.open(sectionId, "_parent");
}

function dashboard() {
    document.write("Welcome to Dashboard!!")
}

function user_details() {
    var user = {
        name: "Voona Reshmanth",
        email: "reshmanthv01@example.com",
        position: "Intern",
        Id: "INT729",
        location: "Bangalore"
    };

    document.getElementById("name").textContent = user.name;
    document.getElementById("email").textContent = user.email;
    document.getElementById("position").textContent = user.position;
    document.getElementById("id").textContent = user.Id;
    document.getElementById("location").textContent = user.location;


}

function user_list() {
    var users = [
        { name: "Voona Reshmanth", email: "reshmanthv01@gmail.com" },
        { name: "Rahul kumar Hotta", email: "rahulhotta@gmail.com" },
        { name: "Asutosh Dora", email: "asutoshdora@gmail.com" },
        { name: "Chinmoy Ranjan", email: "chinmoyranjan@gmail.com" },
        { name: "Sayed Imran", email: "imransayed@gmail.com" }
    ];
    var userList = document.getElementById("user-list");

    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        userList.innerHTML += `<li>${user.name + " - " + user.email}</li>`
    }
}

function user_setup() {
    document.write("User Setup!!");
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    });
}

function update_time() {
    var now = new Date(); // Get current date and time
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Format the time to ensure two digits for hours, minutes, and seconds
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;

    // Update the clock element on the page with the current time
    document.getElementById("clock").textContent = timeString;
}

