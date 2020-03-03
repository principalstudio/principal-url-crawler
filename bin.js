#!/usr/bin/env node
var argv = require('yargs')
  .usage('Usage: $0 [options]')
  .example(
    '$0 -u https://principal.studio -o ./files.json',
    'Crawl every urls and save results in a file'
  )
  .alias('u', 'url')
  .nargs('u', 1)
  .describe('u', 'Website url')
  .alias('o', 'output')
  .nargs('o', 1)
  .describe('o', 'Output json file')
  .help('h')
  .alias('h', 'help')
  .demandOption(['u', 'o'])
  .epilog('Copyright Principal Studio').argv;

const crawler = require('./crawler');
crawler(argv);
