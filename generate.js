const fs = require('fs')
const path = require('path')

let kernFiles = fs.readdirSync(path.resolve(__dirname, 'kern-images'))

let files = JSON.parse(fs.readFileSync('./imageDetails.json', 'utf-8'))

const imgIfExists = (name, nameList) => nameList.includes(name) ? `![${name}-vhv](./kern-images/${name})` : `![**VHV could not render: ${name}**](./error.svg)`

let mdTemplate = `# Tests
${expand()}`

function expand() {
  let asPng = Object.entries(files).reduce((accum, [key, val]) => {
    return {...accum, [key.replace('.xml', '.png')]: val }
  }, {})
  
  return Object.entries(asPng)
  .map(([key, val]) => {
    return `

## ${key}
<p>${val.desc}</p>

### Unofficial lilypond MusicXML render
![${key}-lilypond](./lilypond-musicxml/${key})
### Verovio Humdrum Viewer render
${imgIfExists(key, kernFiles)}`
  })
}

fs.writeFileSync('tests.md', mdTemplate)