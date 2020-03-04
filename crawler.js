const crallAllUrl = args => {
  return new Promise((resolve, reject) => {
    const Crawler = require('crawler');
    const save = require('./save');
    const jsdom = require('jsdom');
    const { JSDOM } = jsdom;
    const urls = [];
    const targetUrl = new URL(args.url);
    console.log('Start crawling all url of ' + targetUrl.href);

    const c = new Crawler({
      maxConnections: 10,
      userAgent: 'Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/30.0',
      jQuery: false,
      callback: function(error, res, done) {
        if (error) {
          console.log(error);
        } else {
          //prepare jsdom
          const dom = new JSDOM(res.body);
          const document = dom.window.document;
          console.log('Crawl: "' + res.request.uri.href + '"');

          document.querySelectorAll('a').forEach(el => {
            let href = el.href;
            const internalUrl = href.charAt(0) === '/';

            if (internalUrl) {
              href = targetUrl.origin + href;
            }

            if (href) {
              const url = new URL(href);
              if (url.origin == targetUrl.origin) {
                populateHref(href);
              }
            }
          });
        }
        done();
      },
    });

    function populateHref(href) {
      if (!urls.includes(href)) {
        urls.push(href);
        c.queue(href);
      }
    }

    //Start
    populateHref(targetUrl.href);

    //Finish
    c.on('drain', function() {
      console.log('Crawl finished');
      if (args.output) {
        save(urls, args.output).then(() => {
          resolve(urls);
        });
      } else {
        resolve(urls);
      }
    });
  });
};

module.exports = crallAllUrl;
