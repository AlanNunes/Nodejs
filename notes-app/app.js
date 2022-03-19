const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

const log = console.log

yargs.version('1.0.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        log(`Title: ${argv.title}`)
        log(`Body: ${argv.body}`)
    }
})

yargs.command({
    command: 'rm',
    describe: 'Remove a note',
    handler: function() {
        log('Removing the note!')
    }
})

yargs.command({
    command: 'ls',
    describe: 'List all notes',
    handler: function() {
        log('Listing all notes!')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        log('Reading the note!')
    }
})

yargs.parse()