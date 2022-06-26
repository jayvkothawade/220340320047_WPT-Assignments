const url="";
let datab={
    host:"localhost",
    user:"jay",
    password:"cdac",
    database:"Wpt",
    port:3306
};
const mysql =require('mysql2');
const con=mysql.createConnection(datab);

console.log("Database adventures");