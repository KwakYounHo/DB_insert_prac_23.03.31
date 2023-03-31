const bcrypt  = require('bcrypt');
const mysql   = require('mysql2');
const fs      = require('fs');
const configuaration = {
  host              : '192.168.0.156',
  port              : 3306,
  user              : 'admin_kwak',
  password          : 'root',
  database          : 'IA',
  connectionLimit   : 5,
  waitForConnection : true
};

// const userData = [];
// 
// const data   = {
  // ID      : 'test',
  // PW      : 'test',
  // talk    : 'test for insert',
  // alpabet : 'A'
// }
// 
// class _data {
  // constructor(data) {
    // this.ID      = data.ID
    // this.PW      = bcrypt.hashSync(data.PW,12);
    // this.talk    = data.talk
    // this.alpabet = data.alpabet
  // }
// }
// 
// function newUser (array) {
  // const user = new _data(data);
  // array.push(user);
// }
// 
// newUser(userData)
// fs.writeFileSync('./userData.json',JSON.stringify(userData, null, 2))

const DB = mysql.createConnection(configuaration);
DB.connect();
DB.query('show tables',(err,result)=>{
  if (err) {throw err;}else{console.log(result)};
})
DB.end();