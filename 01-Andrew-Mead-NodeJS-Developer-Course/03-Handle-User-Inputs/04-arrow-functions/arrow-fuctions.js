// Default Function Definision
const squre1 = function (x) {
    return x * x
}
console.log(squre1(3))


// Arrow Function Definision
const squre2 = (x) => {
   return x * x
}
console.log(squre2(3))


// Arrow Function Shorthand Definision
const squre3 = (x) => x * x
console.log(squre3(3))


// Use Arrow Function inside of an Object
const event = {
    name: 'Birthday Party',
    guestList: ['Dhanushka', 'Gayashan', 'Chamari'],

    printGuestList1: function () {
        console.log('Guest list for ' + this.name)
    },

    // Does not work : Arrow Function does not have it's own 'this'
    // printGuestList1:  () => {
    //     console.log('Guest list for ' + this.name)
    // },

    // Arrow Function use 'this' of Parent Function
    printGuestList2 () {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestList1()
event.printGuestList2()


// Challenge 
const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],

    getTasksToDo() {
        return this.tasks.filter((task) => !task.completed)
    }
}

console.log(tasks.getTasksToDo()) 