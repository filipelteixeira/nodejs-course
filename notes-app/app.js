const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs version
yargs.version('1.0.1');

// Create add command
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
    handler: (argv) => notes.add(argv.title, argv.body)
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        id: {
            describe: 'Note Id',
            demandOption: true,
            type: 'int'
        }
    },
    handler: (argv) => notes.remove(argv.id)
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    buider: {
        id: {
            describe: 'Note Id',
            demandOption: true,
            type: 'int'
        }
    },
    handler: (argv) => console.log(notes.read(argv.id))
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: () => console.log('listing notes...')
});

// Parse yargs commands
yargs.parse();