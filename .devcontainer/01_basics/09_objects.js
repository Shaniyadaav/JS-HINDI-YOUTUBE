const JsUser = {
    name: "Hitesh",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])

JsUser.email = "hitesh@chatgpt.com"
//console.log(JsUser)
//Object.freeze(JsUser)
JsUser.email = "ejkdn@gamil.com"

////******functions */

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log('Hello js user, ${this.name}');
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());