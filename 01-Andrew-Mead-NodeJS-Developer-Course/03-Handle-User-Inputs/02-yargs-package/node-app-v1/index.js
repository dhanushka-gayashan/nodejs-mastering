const yargs = require('yargs')

// Customize Yargs Version
// run: node index.js --version 
yargs.version('1.1.0')

// Create Commands 
// run: node index.js --help
// run: node index.js add
yargs.command({
    command: 'add',
    description: 'add a new note',
    handler: function () {
        console.log('New Note has been added...')
    }
})

// run: node index.js remove
yargs.command({
    command: 'remove',
    description: 'remove a note',
    handler: function () {
        console.log('Note has been removed...')
    }
})

// run: node index.js list
yargs.command({
    command: 'list',
    description: 'list your notes',
    handler: function() {
        console.log('All notes have been listed...')
    }
})

// run: node index.js read
yargs.command({
    command: 'read',
    description: 'show seleted note content',
    handler: function() {
        console.log('Show selected note contect')
    }
})

console.log(yargs.argv)



