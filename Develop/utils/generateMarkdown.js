// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function License(badge){
  this.badge = badge
  }
  let renderLicenseBadge = (input)=>{
    let response 
    switch(input.join()){
      case "none":
        response = ""
      break
      case "MIT": //if returned {data.license} is MIT, then return markdown badge for MIT + link, etc.
        response = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break
      case "GNU GPL v3":
        response = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/MIT)"
      break
      case "ISC":
        response = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
      break
      }
    console.log(input)
    return response
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
   ${data.description}
  ## Installation
   ${data.installation}
  ## Usage
   ${data.usage}
  ## Contributing
   ${data.contributing}
  ## Tests
   ${data.tests}
  ## License
  ${renderLicenseBadge(data.license)}

  ## Questions
  * [GitHub Profile](http://github.com/${data.github})
  * Email address: ${data.email}`
}

module.exports = generateMarkdown;
