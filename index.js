const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const fs = require('fs')
const { pipeline } = require('stream')
const { promisify } = require('util')

const jsdom = require('jsdom')
const { JSDOM } = jsdom

async function init() {
  let res = await fetch('http://lilypond.org/doc/v2.18/input/regression/musicxml/collated-files')
  let text = await res.text()

  let dom = new JSDOM(text)
  let document = dom.window.document

  let images = document.querySelectorAll('img[alt="[image of music]"]')

  let nameToImg = {}
  images.forEach((img) => {
    let { name, desc } = extractImageDetails(img)
    nameToImg[name] = { src: img.src, desc }
  })

  fs.writeFileSync('imageDetails.json', JSON.stringify(nameToImg), 'utf-8');
}

function extractImageDetails(img) {
  let imgName = img.parentElement.parentElement.previousElementSibling.textContent
  let desc = img.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent.split('\n').map(s => s.trim()).join(' ')

  // Remove apostrophe characters
  return { 
    name: [...imgName].filter(char => ![8216, 8217].includes(char.charCodeAt(0))).join('').replace('\n', ''), 
    desc
  }
}

const imgBaseURL = 'https://lilypond.org/doc/v2.18/input/regression/musicxml/'

const streamPipeline = promisify(pipeline);

async function downloadImage(imgURL, filename) {
  const response = await fetch(imgURL);

  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
  
  await streamPipeline(response.body, fs.createWriteStream(`./lilypond-musicxml/${filename}`));
}


init()