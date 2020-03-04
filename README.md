# URL Crawler

### Crawl url of targeted website

## Installation

```bash
npm i @principalstudio/url-crawler
```

You can also install this package in global

## Usage

### CLI

```bash
Usage: url-crawler [options]

Options:
  --version     Show version number number
  -u, --url     Website url [required]
  -o, --output  Output json file [required]
  -h, --help    Show help
```

For example:

```bash
url-crawler -u https://principal.studio -o ./files.json
```

### JS

```js
const urlCrawler = require('@principalstudio/url-crawler');

/**
 * Represents a book.
 * @param {object} args - Options
 *  - url: string (required)
 *  - output: string
 * @return Promise with an array of urls (strings)
 */
urlCrawler({
  url: 'https://www.principal.studio',
}).then(urls => {
  console.log(urls);
});
```
