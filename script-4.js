const whitelist = ["Admin", "balbes"];
let system = {};
function User(username, email) {
    this.username = username;
    this.email = email;
    this.id = Math.floor(Math.random() * 999999);
    this.login = function () {
        let count = 0;
        for (let i = 0; i < whitelist.length; i++) {
            if (whitelist[i] == this.username) {
                console.log(this.username + " has logged in");
                system[this.username] = this.id;
                count++;
            }
        }
        if (count == 0) {
            console.log("Your username is not in whitelist!");
        }
    }
    this.logout = function () {
        delete system[this.username];
    }

}
system.addUser = function () {
    let username = prompt("Enter username");
    whitelist.push(username);
}
system.getOnlineUsers = function () {
    for (let username in system) {
        console.log(system[username]);
    }
}
system.removeUser = function () {
    if (this.username !== "Admin") {
        console.log("Only Admin can remove users.");
        return null;
    }
    let deleteUsername = prompt("Enter username that you want to remove");
    for (i = 0; i < whitelist.length; i++) {
        if (whitelist[i] == deleteUsername && deleteUsername !== "Admin") {
            whitelist.splice(i, 1);
        }
    }
}
system.getUser = function() {
    let userId = prompt("Enter user ID:");
    let count = 0;
    for (let username in system) {
        if (system[username] == userId) {
            console.log("User Info: \nUsername: " + username + "\nEmail: " + system[username].email);
            count++;
            break;
        }
    }
    if (count == 0) {
        console.log("There is no user with entered ID");
    }
}

User.prototype.removeUser = system.removeUser;

const balbes = new User("balbes", "balbes123@gmail.com");
const baklan = new User("baklan", "baklan123@gmail.com");
const admin = new User("Admin", "admin123@gmail.com");
