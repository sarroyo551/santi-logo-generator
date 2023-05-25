const inquirer = require('inquirer')
// import inquirer from 'inquirer'
const {Triangle, Circle, Square} = require('./lib/shapes.js')
const fs = require('fs')


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

    // console.log(shape)
    shape.setTextColor(answers.text_color)
    shape.setText(answers.text)
    shape.setColor(answers.color)

    let svgShape = shape.render()
    let svgText = shape.renderText()
    const svgString = `<html> 
    <body>
    <svg width="300" height="200">
    <g> 
    ${svgShape}
    ${svgText}
    </g>
    </svg>
    </body>
    </html>`
    
    fs.writeFile('svgExample3.html', svgString, 'utf8', (error) => {
      if (error) {
        console.log(error) 
      } else {
        console.log('file created')
      }
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
    console.log(error)  
    } else {
    console.log(error)  
    }
  });