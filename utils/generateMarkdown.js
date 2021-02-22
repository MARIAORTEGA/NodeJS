// function to generate markdown for README
function generateMarkdown(data) {
  return `# Title ${data.title}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.test}
  ${data.license}
   {
   
  }
  ${data.username}
  ${data.email}

`;
}

module.exports = generateMarkdown;
