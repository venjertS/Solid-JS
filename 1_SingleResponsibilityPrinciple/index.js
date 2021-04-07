// Single Responsibility Principle - Принцип Единой Ответственности

class People {
    constructor(name, info){
        this.name = name
        this.info = info
        this.modified = false
    }

    update(info){
        this.info = info
        this.modified = true
    }
/*
    toHTML(){
        return `
            <div class="people">
                <h1>${this.name}</h1>
                <p>${this.info}</p>
            </div>
        `
    }

    toJSON(){
        return JSON.stringify({
            name: this.name,
            info: this.info,
            modified: this.modified,
        }, null, 2)
    }
*/    
}

class PeoplePrint {
    constructor(people){
        this.people = people
    }
    html(){
        return `
            <div class="people">
                <h1>${this.people.name}</h1>
                <p>${this.people.info}</p>
            </div>
        `
    }

    json(){
        return JSON.stringify({
            name: this.people.name,
            info: this.people.info,
            modified: this.people.modified,
        }, null, 2)
    } 
    
    xml(){
        return `
            <people>
                <name>${this.people.name}</name>
                <info>${this.people.info}</info>
            </people>
        `             
    }
}
/*
const people = new People('Andrey', 'Manager')
console.log(people.toHTML())
console.log(people.toJSON())
*/

const printer = new PeoplePrint(
    new People('Andrey', 'Manager')
)
console.log(printer.html())
console.log(printer.json())
console.log(printer.xml())
// $ node 1_SingleResponsibilityPrinciple/index.js