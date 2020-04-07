const yargs = require('yargs')

// run: node index.js --version 
yargs.version('1.1.0')

// run: node index.js add --title="my note" --body="this is my note"
yargs.command({
    command: 'add',
    description: 'add a new note',
    builder: {
        title: {
            description: 'note title',
            demandOption: true, 
            type: 'string' 
        },
        body: {
            description: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(`Title: ${argv.title}`)
        console.log(`Body: ${argv.body}`)
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

yargs.parse()
//console.log(yargs.argv)



