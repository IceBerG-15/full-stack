const regex = /very/g;
const text = "this is the very very hard thing to do.";
console.log(text.replace(regex, 'VERY'));
const regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;  // email validation
const ph = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/; // phone number validation
const phone = '+919136812895'
const email = "email@email.Com";
console.log(email);
if (regx.test(email)) {
    console.log("It is the valid email address");
}
else{
    console.log("It is not the valid email address");
}
if (ph.test(phone)) {
    console.log("It is the valid phone number");
}
else{
    console.log("It is not the valid phone number");
}