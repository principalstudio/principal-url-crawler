module.exports = urlCrawler = (args = {}) => {
  const crawler = require('./crawler');

  if (!args.url) {
    console.error('Url required');
    return;
  }

  return crawler(args);
};
