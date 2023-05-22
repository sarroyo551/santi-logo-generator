//exports triangle circle and square CLASSES 
class Shape {
    constructor() {
        this.text = '';
        this.color = ''; 
        
    }
    setColor(color) {
        this.color = color
    }
    setText(text) {
        this.text = text
    }
}

const shape = new Shape()

// shape.setColor('blue')
// console.log(shape)

class Traingle extends Shape {
    constructor() {
        super() //look up
        this.shape = 'triangle'
    }
}

class Circle extends Shape {
    constructor() {
        super() //look up
        this.shape = 'circle'
    }
}

class Square extends Shape {
    constructor() {
        super() //look up
        this.shape = 'square'
    }
}