var user = prompt("Who are you ?");
if (user == "a") {
    var pass = prompt("Please enter your password!")
    if (pass == 1234) {
        document.write("Hello " + user); //here must need ==;
    } else if (pass == null) {
        var pass2 = prompt("You don't entered this page.Please give your password.");
        if (pass2 == 1234) {
            document.write("Hello " + user);
        } else if (pass2 == null) {
            alert("Sorry!")
        } else {
            alert("Wrong Password.");
        }
    } else { alert("Wrong Password.") }
} else if (user == null) {
    alert("Your identity must be needed to continue.");
} else {
    alert("Sorry! I don't know you");
}