const Wappalyzer = require('wappalyzer');

const urls = ['https://www.abc.com','https://www.xyz.com']
const options = {
  debug: false,
  delay: 10000,
  headers: {},
  maxDepth: 3,
  maxUrls: 1,
  maxWait: 20000,
  recursive: true,
  probe: true,
  userAgent: 'Wappalyzer',
  htmlMaxCols: 5000,
  htmlMaxRows: 5000,
};

const wappalyzer = new Wappalyzer(options)
const fs = require('fs');

;(async function() {
  try {
    await wappalyzer.init()

    const results = await Promise.all(
      urls.map(async (url) => ({
        url,
        results: await wappalyzer.open(url).analyze()
      }))
    )

    //Generate output to a json file
	fs.writeFile('results.json', JSON.stringify(results, null, 2), (err) => {
	// throws an error, you could also catch it here
	if (err) throw err;

	// success case, the file was saved
	console.log('results saved!');
	});

  } catch (error) {
    console.error(error)
  }

  await wappalyzer.destroy()
})()