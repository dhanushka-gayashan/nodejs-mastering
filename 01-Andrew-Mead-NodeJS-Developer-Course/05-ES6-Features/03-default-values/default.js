// Provide Default Value for Paramters
const greet = (name = 'User') => {
    console.log('Hello, ' + name + '!')
}

greet('Dhanushka')

greet()


//=========================================================

// User Default Value to handle Object Destructuring Issue
const transaction = (type, {label, stock  = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order')