//Dates

let myDate = new Date();
console.log(myDate.toString());//Tue Jun 17 2025 12:02:22 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Tue Jun 17 2025
console.log(myDate.toISOString());//2025-06-17T12:04:13.855Z
console.log(myDate.toJSON());//2025-06-17T12:04:45.198Z
console.log(myDate.toLocaleString());//6/17/2025, 12:05:16 PM
console.log(myDate.toLocaleDateString());// 6/17/2025

console.log(typeof myDate);// object

let anotherDate = new Date( 2025, 3, 18)
console.log(anotherDate.toDateString());//Fri Apr 18 2025


let date1 = new Date(2025, 3, 18, 5,5)
console.log(date1.toLocaleString());//4/18/2025, 5:05:00 AM


let date2 = new Date("2023-01-25")
console.log(date2.toLocaleString());// 1/25/2023, 12:00:00 AM

let date3 = new Date("01-14-2025")
console.log(date3.toLocaleString());// 1/14/2025, 12:00:00 AM

let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(date3.getTime());//millisecond time...


console.log(Math.floor(Date.now()/1000));// converts into second.




let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",
})
