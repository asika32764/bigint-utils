#!/usr/bin/env node

const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const { generateDocumentation } = require('tsdoc-markdown');
const { globSync } = require('glob');

// Generate documentation for a list of files
const nnsInputFiles = globSync([
  'src/math/**/*.ts',
  'src/utils/**/*.ts',
  'src/crypto/**/*.ts',
], {
  windowsPathsNoEscape: true
}).map((path) => path.replace(/\\/g, '/'));

generateDocumentation({
  inputFiles: nnsInputFiles,
  outputFile: './docs/_functions.md'
});

const readme = readFileSync(resolve(__dirname, 'docs/_README.md'), 'utf-8');
const functions = readFileSync(resolve(__dirname, 'docs/_functions.md'), 'utf-8');

const content = readme.replace('<!-- Functions -->', functions);

writeFileSync('./README.md', content);
