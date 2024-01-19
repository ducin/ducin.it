#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const toc = require('markdown-toc')
const myMarked = require('marked')
const prettier = require("prettier")

const { loadPosts } = require('./load-posts')
const { pageTpl } = require('../templates/page-tpl')

const TOCPlaceholder = '<% TOC %>'

const postSourceMarkdownFilepath = (name) => path.join(__dirname, `../posts/${name}.md`)
const postTargetHTMLFilepath = (name) => (`./${name}.html`)

const imageURL = (filepath) => `http://ducin.it/images/${filepath}`
// thumbnailURL = (thumbnailFile) => `http://ducin.it/images/${thumbnailFile}`;

const generatePostHTML = async (post) => {
  const { title, keywords, description,
    sourceFile, thumbnailFile } = post
  const origMD = '' + fs.readFileSync(postSourceMarkdownFilepath(sourceFile))
  const TOCContent = '## Table of Contents\n\n' + toc(origMD).content
  const MDWithTOC = origMD.replace(TOCPlaceholder, TOCContent)
  let output = myMarked(MDWithTOC)

  const thumbnailFilepath = path.join(__dirname, '..', 'images', thumbnailFile);
  if (!fs.existsSync(thumbnailFilepath)) {
    throw new Error(`File ${thumbnailFilepath} does not exist`)
}

  output = pageTpl({
    head: {
      title: `${title} - Tomasz Ducin - blog`,
      author: 'Tomasz Ducin',
      keywords: keywords.join(', '),
      description: description,
      thumbnailURL: `${imageURL(thumbnailFile)}`,
      canonicalURL: 'http://ducin.it',
      shortcutIconURL: 'images/td-logo-zolte-80.png',
    },
    tags: {
      twitter: {
        'twitter:card': 'summary_large_image',
        'twitter:site': '@tomasz_ducin',
        'twitter:creator': '@tomasz_ducin',
        'twitter:description': description,
        'twitter:image': `${imageURL(thumbnailFile)}`,
      },
      og: {
        'og:type': 'article',
        'og:title': `${title} - Tomasz Ducin - blog`,
        'og:description': description,
        'og:image': `${imageURL(thumbnailFile)}`,
      },
    },
    body: {
      topLink: 'Ducin.it',
      topTitle: 'Conference Videos',
      content: output,
    }
  })

  // output = await prettier.format(output, { parser: "html" });

  fs.writeFileSync(postTargetHTMLFilepath(sourceFile), output)
}

for (const post of loadPosts()){
  generatePostHTML(post)
}

// module.exports = {}

// const { listFiles } = require('./utils')
// run:
// listFiles('posts')
//   .filter(f => f.match(/.*\.(md)/ig))
//   .map(f => f.substr(0, f.length-3))
//   .forEach(generatePostHTML)
