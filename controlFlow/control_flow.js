let userRole = "admin";
let accessLevel;

let isLoggedIn = true;
let userMessage;

let userType = "subscriber";
let userCategory;

let isAuthenticated = true;

let authStatus = isAuthenticated ? "Authenticated" : "Not Authenticated"
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
        default:
            userCategory = "unknown"
}

if (userRole === "admin")
accessLevel = "Full access granted"
else if (userRole === "manager")
accessLevel ="Limited Access granted"
else {
    accessLevel="no access granted"
}

console.log("Access Level:", accessLevel);

if (isLoggedIn) {
    if(userRole === "admin")
        userMessage = "Welcome , admin!";
    else {
        userMessage = "Welcome , user!";
    }

}
else {
    userMessage = 'Please log in';
}
