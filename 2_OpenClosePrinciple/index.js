// Open Close Principle - Принцип открытия закрытия

class Shape {
    area(){
        throw new Error('Area method should be implemented')
    }
}

class Square extends Shape {
    constructor(size){
        super()
        //this.type = 'square'
        this.size = size
    }
    area(){
        return this.size ** 2
    }    
}

class Circle extends Shape {
    constructor(radius){
        super()
        //this.type = 'circle'
        this.radius = radius
    }
    area(){
        return (this.radius ** 2) * Math.PI
    } 
}

class Rect extends Shape {
    constructor(width, height){
        super()
        //this.type = 'rect'
        this.width = width
        this.height = height
    }
    area(){
        return this.width * this.height
    }
}

class AreaCalc {
    constructor(shapes = []){
        this.shapes = shapes
    }

    sum(){
        return this.shapes.reduce((acc, shape)=>{
            /*
            if(shape.type === 'circle'){
                acc += (shape.radius ** 2) * Math.PI
            } 
            else if(shape.type === 'square'){
                acc += shape.size ** 2
            }
            else if(shape.type === 'rect'){
                acc += shape.width * shape.height
            }
            */
            acc += shape.area()
            return acc
        }, 0)
    }    
}

const calc = new AreaCalc([
    new Square(5),
    new Circle(10),
    new Circle(2),
    new Rect(2, 4),
])

console.log(calc.sum());

// $ node 2_OpenClosePrinciple/index.js