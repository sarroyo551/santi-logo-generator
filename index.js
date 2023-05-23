import inquirer from 'inquirer'
import {Triangle, Circle, Square} from './lib/shapes.js'

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to 3 characters",
    },
    {
      type: "input",
      name: "text_color",
      message: "Enter a color or a hex decimal for text",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape",
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: "input",
      name: "color",
      message: "Enter a color or a hex decimal for shape color",
    }
  ])
  .then((answers) => {
    console.log(answers)
    let shape;
    if (answers.shape == 'Triangle') {
      shape = new Triangle()
    } else if (answers.shape == 'Circle') {
      shape = new Circle()
    } else if (answers.shape == 'Square')  {
      shape = new Square()
    }

    console.log(shape)
    shape.setTextColor(answers.text_color)
    shape.setText(answers.text)
    shape.setColor(answers.color)
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });