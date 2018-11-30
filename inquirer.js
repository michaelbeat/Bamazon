var inquirer = require('inquirer');
var chalk = require('chalk');


var {getStoreItems, chooseSaltyItems, chooseSweetItems, connection} = require('./bamazonCustomer');

function store() {
    var welcome = {
        type: 'list',
        name: 'welcome',
        message: ` Welcome to Trilogy Dry Goods! \n Please choose an item you would like to purchase: `,
        choices: [
            {name: 'Salty Snacks', value: 'view1'},
            {name: 'Sweet Snacks', value: 'view2'}
           
        ]
    };

    return inquirer 
        .prompt([welcome]);
}

store()
    .then(answers => {
        // console.log('Here are the choices: ');
        // console.log(answers);
        var option = answers.welcome;
        switch(option) {
            case 'view1':
                chooseSaltyItems(connection)
                    .then(function(result) {
                    
                    });
            case 'view2':
                chooseSweetItems(connection)
                    .then(function(result) {
                        // console.log(result);
                        restart();
                        // connection.end();
                    });

        }
    });

function restart() {
    var question = {
        type: 'confirm',
        name: 'restart',
        message: 'Choose something else?'
    }

    inquirer.prompt([question])
        .then(function(answer){
            // console.log(answer);
            if (answer.restart) {
                store();
            } else {
                connection.end();
            }
        });
}