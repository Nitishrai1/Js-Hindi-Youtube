const accountId = 144553    //Not change in future
let accountEmail = "nitish@google.com"    //Can be changed in the future   this is used beacuse it does not have scope deffect
var accountPassword = "12345"          //Var is not used because scope deffect and functional scope
accountCity = "Jaipur"                //this is not preferable but it can be possible to declare a variable
let accountState;                     //the value be be undefined if it is not initiated

accountEmail = "hchc@gmail.com"
accountPassword = "7070"
accountCity = "Gorakhpur"

// accountId = 2    //Not allowed
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity]);