
"use strict";
var phoneNumber = prompt("Enter your phone number in the format +000000000000:");
if (phoneNumber === "") {
    alert("Enter your phone number in the format +000000000000,please")
} else
    if (phoneNumber[0] != "+") {
        alert("The phone number must be entered in the format +000000000000")
    } else
        if (phoneNumber.length != 13) {
            alert("The input field  must contain 13 characters");
        } else
            var newPhoneNumber = phoneNumber.slice(1);
for (var char of newPhoneNumber) {

    var code = char.charCodeAt();

    if (code < 48 || code > 57) {
        alert("The phone number must only consist of numbers and a plus at the beginning");
        break
    }
    console.log(code);
}






