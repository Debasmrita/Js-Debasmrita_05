const accountId = 14453
let accountEmail= "debasmrita@goggle.com"
var accountPassword= "1234_debu"
accountCity= "Kolkata"
let accountState;
/*
prefer not to use
'var' because of issue in block space and functional scope.
*/

// accountId=2 // we cannot change the const value
accountEmail="debu@gmail.com"
accountPassword="12345"
accountCity="delhi"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
console.log(accountState)