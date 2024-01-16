#!/usr/bin/env node

const { listFiles } = require('./utils')
const { generatePostHTML } = require('./post')

listFiles('posts')
  .filter(f => f.match(/.*\.(md)/ig))
  .map(f => f.substr(0, f.length-3))
  .forEach(generatePostHTML)
