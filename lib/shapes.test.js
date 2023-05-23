import  {Triangle, Circle, Square} from './shapes.js'

describe('shapes', () => {
    it('using setColor updates the set color', () => {
        const expectedColor = 'red'
        const circle = new Circle()

        circle.setColor('red')
        expect(circle.color).toEqual(expectedColor)
    })
    it('render method returns svg shape', () => {
        const triangle = new Triangle()

        triangle.setColor('red')
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
    })
})