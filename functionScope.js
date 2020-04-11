// Function Scope

function compulsory(data) {
    console.log(data);
    throw new Error('function has few parameters');
}

function runApp() {
    let firstName = 'Kiran';
    let lastName = 'Narkhede';

    console.log(`Name : ${firstName} ${lastName}`);

    function sayHello(firstName = compulsory(), lastName = compulsory()) {
        console.log(`Name : ${firstName} ${lastName}`);
    }

    sayHello('Kunal Narkhede');
}

runApp();

// sayHello('Rohit Narkhede'); // not in scope

// variable scope 

let firstName = 'Kiran'

function scopeCheck() {
    
    if(true) {
        let firstName = 'Kunal';
        var lastName = 'Narkhede';
    }

    console.log(`Name : ${firstName} ${lastName}` );
}

scopeCheck();