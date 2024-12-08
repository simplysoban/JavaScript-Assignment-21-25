console.log("---------------------------")
console.log("Question 1")
console.log("---------------------------")


var firstName = prompt("What's your first name? ");
var lastName = prompt("What's your last name? ");
var fullName = firstName + " " + lastName;
console.log("Hi, " + fullName + "!");

console.log("---------------------------")
console.log("Question 2")
console.log("---------------------------")


var phone = prompt("What's your favourite mobile phone model? ")
console.log("Length of the string is: " + phone.length)


console.log("---------------------------")
console.log("Question 3")
console.log("---------------------------")


var nationality = "Pakistani";
console.log("String: " + nationality);
console.log("The index of "+ nationality[nationality.indexOf("n")]+" is "+ nationality.indexOf("n") );


console.log("---------------------------")
console.log("Question 4")
console.log("---------------------------")


var txt = "Hello World";
console.log("String: " + txt);
console.log("Last index of 'l': " + txt.lastIndexOf("l"));


console.log("---------------------------")
console.log("Question 5")
console.log("---------------------------")


nationality = "Pakistani"
console.log("String: " + nationality);
console.log("Character at index 3: " + nationality.charAt(3));


console.log("---------------------------")
console.log("Question 6")
console.log("---------------------------")


var full = firstName.concat(" ", lastName)
console.log("Hi " + full + "!")


console.log("---------------------------")
console.log("Question 7")
console.log("---------------------------")

var city =  "Hyderabad"
console.log(city.replace("Hyder", "Islam"))


console.log("---------------------------")
console.log("Question 8")
console.log("---------------------------")


var message = "Ali and Sam are best friends.They play Cricket and Football together";
console.log(message.replaceAll("and", "&"))


console.log("---------------------------")
console.log("Question 9")
console.log("---------------------------")


var strNum = "472";
console.log("Value: " + strNum);
console.log("Type: " + typeof strNum);

strNum = parseInt(strNum)
console.log("Value: " + strNum);
console.log("Type: " + typeof strNum);


console.log("---------------------------")
console.log("Question 10")
console.log("---------------------------")


var toCap = prompt("Enter an string to Capitalize: ");
console.log("User Input: " + toCap);
console.log("Upper case: " + toCap.toUpperCase());


console.log("---------------------------")
console.log("Question 11")
console.log("---------------------------")


var toTitle = prompt("Enter an string to convert into Title Case: ");
console.log("User Input: " + toTitle);
console.log("Title Case: " + toTitle.charAt(0).toUpperCase() + toTitle.slice(1, toTitle.length -1));


console.log("---------------------------")
console.log("Question 12")
console.log("---------------------------")

var num = 35.36
num = num.toString()
console.log(num.replace(".", ""));


console.log("---------------------------")
console.log("Question 13")
console.log("---------------------------")


var username = prompt("Enter your username: ");
if (username.includes("@")){
    alert("Please enter username without symbols");
}else if(username.includes("!")){
    alert("Please enter username without symbols");
}else if(username.includes(".")){
    alert("Please enter username without symbols");
}else if(username.includes(",")){
    alert("Please enter username without symbols");    
}else{
    alert("Username is valid");
}


console.log("---------------------------")
console.log("Question 14")
console.log("---------------------------")


var bakeryItems = ["bread", "croissant", "donut", "eclair", "fruitcake", "cookie", "biscuit"];
var userItem = prompt("Enter the item name you want to search in our Bakery: ").toLowerCase();

var found = false

for(var i = 0; i < bakeryItems.length; i++) {
    if(userItem == bakeryItems[i]){
        found = true
        break
    }
}

if(found){
    alert("Yes, we have " + userItem + " at index "+ i + " in our Bakery");
}else{
    alert("Sorry, we don't have " + userItem + " in our Bakery");
}


console.log("---------------------------")
console.log("Question 15")
console.log("---------------------------")


var password = prompt("Enter a password: ");
var letters = false;
var numbers = false;
var correct = false;

for (var i = 0; i < password.length; i++) {
    if(password[i] >= '0' && password[i] <= '9'){
        numbers = true;
    }
    
    if(password[i] >= 'a' && password[i] <= 'z' || password[i] >= 'A' && password[i] <= 'Z'){
        letters = true;
    }
    
    if(password[0] >= '0' && password[0] <= '9'){
        alert("Password should only start with alphabet ")
    }

    if(!letters || !numbers){
        alert("Please start your password with alphabet and enter number in between or end of the password");
    }

    if(letters || numbers){
        correct = true;
    }
    
}

if(correct){
    alert("Your password is correct! Please proceed.");
}else{
    alert("Password is not valid, Please Try Again!");
}


console.log("---------------------------")
console.log("Question 16")
console.log("---------------------------")


var university = "University of Karachi";
var universityName = university.split("");

for(var i = 0; i < universityName.length; i++){
    console.log(universityName[i]);
}


console.log("---------------------------")
console.log("Question 17")
console.log("---------------------------")


var userCountry = prompt("Enter a country name: ").toLowerCase();

console.log("User Country: " + userCountry);
console.log("Last Character: " + userCountry[userCountry.length - 1]);


console.log("---------------------------")
console.log("Question 18")
console.log("---------------------------")


var str = "the quick brown fox jumps over the lazy dog";
var word = prompt("Please enter a word you want to search the occurence in the sentence: ").toLowerCase()

var occ;
var arrStr = str.split(" ");
for(var i = 0; i < arrStr.length; i++){
    if(arrStr[i] === word){
        ++occ;
        console.log("Word found at index: " + i + " Occurence: " + occ + " times");
    }else if(occ = 0){
        console.log("Word not found");
    }
}
    