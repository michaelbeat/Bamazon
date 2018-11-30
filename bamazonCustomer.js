var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Fall2018!",
    database: "bamazon_db"
});

function connectToSQL() {
    connection.connect(function(err) {

    });
}

function getStoreItems(connection) {
    var query1 = "SELECT * FROM products;";

    return new Promise(function(resolve, reject) {
        
        connection.query(query1, function(error, result) {
            result.forEach(function(product) {
                console.log(`Product: ${product.product_name} Price: ${product.price} Quantity: ${product.stock_quantity}  `);
            });

            resolve(connection);
        });
    });
}

function chooseSaltyItems(connection) {
    var query2 = 'SELECT product_name, price FROM products WHERE department_name="saltySnacks";';

    return new Promise(function(resolve, reject){

        connection.query(query2, function(error, result) {
            result.forEach(function(products) {
                console.log(`Option: ${products.product_name} Price: ${products.price}`);
            });

            resolve(connection);
        });
    });
}

function chooseSweetItems(connection) {
    var query2 = 'SELECT product_name, price FROM products WHERE department_name="sweetSnacks";';

    return new Promise(function(resolve, reject){

        connection.query(query2, function(error, result) {
            result.forEach(function(products) {
                console.log(`Option: ${products.product_name} Price: ${products.price}`);
            });

            resolve(connection);
        });
    });
}

connectToSQL();

module.exports = {getStoreItems, chooseSaltyItems, chooseSweetItems, connection};

// connection.connect(function(err) {
//     if (err) throw err;
//     // console.log("connnected as id " + connection.threadId);

//     connection.query("SELECT * FROM products ORDER BY id;", function(err, res){
//         if (err) throw err;
//         // console.log(res);
//         for (var i = 0; i < res.length; i++){
//             console.log(res[i]);
//         }
//     });
//     connection.end();
// });

// FROM playlist.js!!!!!!!!

//const mysql = require('mysql');


// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'Fall2018!',
//     database: 'playlist_db'
// });

// function connectToSQL() {
//     connection.connect(function(err) {
//         addNewSong();
//     });
// }

// function addNewSong(connection) {
//     var query = connection.query("INSERT INTO songs SET ?",
//     {
//        title: 'Paul Revere',
//        artist: 'Beastie Boys',
//        genre: 'hip-hop' 
//     },
//     function(err, res) {
//         console.log(res);
//     }
//     );
// }
