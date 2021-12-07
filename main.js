// import filesystem
const fs = require('fs');
const { command } = require('yargs');
// import yargs
const yargs = require('yargs');
// import students
const students = require('./students')


// add command
yargs.command({
        command: "add",
        describe: "Add Student",
        builder: {
            id: {
                describe: "This Is Id In Add Command",
                demandOption: true,
                type: 'number'
            },
            name: {
                describe: "This Is Name In Add Command",
                demandOption: true,
                type: 'string'
            },
            grade: {
                describe: "This Is grade List In Add Command You Can Use This Template To Passed Data In Terminal '30,20,66'",
                demandOption: true,
            },
            comment: {
                describe: "This Is Comment In Add Command",
                demandOption: false,
                type: 'string'
            }
        },
        handler: (argsv) => {
            students.addPerson(argsv.id, argsv.name, argsv.grade, argsv.comment)
        }
    })
    // read command
yargs.command({
        command: "read",
        describe: "Search Student",
        builder: {
            id: {
                describe: "This Is Id In read Command",
                demandOption: true,
                type: 'number'
            }
        },
        handler: (yargs) => {
            students.readStudent(yargs.id)
        }
    })
    // delete command
yargs.command({
        command: "delete",
        describe: "delete Student",
        builder: {
            id: {
                describe: "This Is Id In read Command",
                demandOption: true,
                type: 'number'
            }
        },
        handler: (yargs) => {
            students.remove(yargs.id)
        }
    })
    // list command
yargs.command({
    command: "list",
    describe: "Show Students",
    handler: () => {
        students.showAll()
    }
})

// Run Yargs
// console.log(yargs.argv);
yargs.parse()