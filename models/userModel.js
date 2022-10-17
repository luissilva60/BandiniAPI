const client = require('./connection.js')
const express = require('express');
const {log} = require("debug");
const app = express();

client.connect();
module.exports.getUsers = async function() {
    try {
        let sql = `select *, to_char(user_bdate, \'DD-MM-YYYY\') bdate, roles_name from Users
                            INNER JOIN roles r on user.user_role_id = r.roles_id`;
        let result = await client.query(sql);
        let users = result.rows;
        console.log("[userModel.getUsers] Users = " + JSON.stringify(users));
        return{status: 200, data: users}
    }catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}
