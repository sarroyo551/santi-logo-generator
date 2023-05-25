//exports triangle circle and square CLASSES 
class Shape {
    constructor() {
        this.text = '';
        this.color = ''; 
        this.textColor = ''
        
    }
    setColor(color) {
        this.color = color
    }
    setText(text) {
        this.text = text
    }
    setTextColor(textColor) {
        this.textColor = textColor
    }
}

class Triangle extends Shape {
    constructor() {
        super() //look up
        this.shape = 'triangle'
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    constructor() {
        super()
        this.shape = 'circle'
    }
    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`
    }
}

class Square extends Shape {
    constructor() {
        super() 
        this.shape = 'square'
    }
    render() {
        return `<rect width="200" height="200" fill="${this.color}" />`
    }
}

// const shapeOne = new Triangle()
// shapeOne.setColor('blue')
// console.log(shapeOne.render())
// // console.log(shapeOne)
// const shapeTwo = new Triangle()
// console.log(shapeTwo)
export {Triangle, Circle, Square}
