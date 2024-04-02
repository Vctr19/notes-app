//const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Comando para criar uma nota
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
    handler: function (argv) {
        console.log(`Title: ${argv.title}\nBody: ${argv.body}`)
    }
})

// Comando para remover uma nota
yargs.command({
    command: 'remove',
    describe: 'Remove the note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Comando para listar as notas
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Comando para ler uma nota
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})


yargs.parse()