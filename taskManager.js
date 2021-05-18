const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let tasks = ["Make bread", "make cake"];
let completedTasks = [];

console.log(tasks)
const manager = () => {
    console.log("Welcome to your task manager, Press");
    console.log("1. to see all your tasks");
    console.log("2. to add a task");
    console.log("3. to delete a task");
    console.log("4. to mark a task as done");
    console.log("5. to Exit the task manager");
    readline.question("Enter your number of choice ", choice => {
        if (choice > "5") {
            console.log(`Dear coach, ${choice} is not an option within the task manager!`)
            manager()
        } else if (choice === "1") {
            let allTasks = tasks.concat(completedTasks)
            console.log(`The current tasks are: ${allTasks}`)
            manager()
        } else if (choice === "2") {
            readline.question("Please enter the task you wish to add ", newTask => {
                tasks.push(newTask)
                console.log(`The task you added is ${newTask}`)
                manager()
            })
        } else if (choice === "3") {
            console.log(`The current tasks are ${tasks}`)
            readline.question("Please enter the task you wish to remove", delTask => {
                let index = tasks.indexOf(delTask)
                tasks.splice(index)
                console.log(`${delTask}  will be removed from the tasks`)
                manager()
            })
        } else if (choice === "4") {
            console.log(`The current tasks are ${tasks}`)
            readline.question("Please enter the task you wish to mark as completed ", compTask => {
                /*if value is already completed => don't show*/
                let index1 = tasks.indexOf(`${compTask}`)
                completedTasks.push(`${compTask}[X]`)
                tasks.splice(index1, 1)
                console.log(`${compTask}  will be marked as completed`)
                if (completedTasks.length === 1) {
                    console.log(`${completedTasks} is complete`)
                } else if (completedTasks.length > 1) {
                    console.log(`${completedTasks} are completed`)
                } else {
                    console.log(`There are currently no completed tasks`)
                }
                manager()
            })
        } else if (choice === "5") {
            console.log("Thank you for consulting the task manager!")
            readline.close()
        }
    })
}
manager()