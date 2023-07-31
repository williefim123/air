var http = require('http');

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello World\n');
}).listen(8888);

const {Builder, Browser, By, Key, until, locateWith} = require('selenium-webdriver');

  // require('chromedriver-undetected');


(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();


  try {
    await driver.get('https://www.skyscanner.com.hk/transport/flights/hkg/es/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&oym=2308&iym=2308&qp_prevScreen=COMBINED_EXPLORE');

    
    await driver.manage().setTimeouts({implicit: 100000});

    cards = await driver.wait(until.elementsLocated(By.css('[class^="PlaceCard_descriptionContainer"]')));
    let flightTable = [];

    for (const card of cards) {
      divs = await card.findElements(By.css("div"));
        let divIndex = 0;
        let row = [];
      for (const div of divs) {
        spans = await div.findElements(By.css("span"));
        
        let spanIndex = 0;

        for(const span of spans) {
          // console.log('///////');
          // console.log(spanIndex);
          // console.log(await span.getText());

          console.log(divIndex, spanIndex);
t = await span.getText();
          console.log(t)
          if((divIndex !== 1) && (spanIndex !== 0)){
            row.push(t);
          } 
          spanIndex++;

        }
        divIndex++;
      }
        flightTable.push(row);


    }
    console.table(flightTable);
  } finally {
    // await driver.quit();
  }
})();