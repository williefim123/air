var http = require('http');

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello World\n');
}).listen(8888);

const {Builder, Browser, By, Key, until, locateWith} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    // await driver.get('https://www.google.com/ncr');
    // await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
    await driver.get('https://www.skyscanner.com.hk/transport/flights/hkg/es/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&oym=2308&iym=2308&qp_prevScreen=COMBINED_EXPLORE');

    // card = await driver.findElement(By.id('app-root'));
    // const card = await driver.findElements(By.className('ResultList_placeCard__NDZmM'));


    // BpkCard_bpk-card__OGNlM
    
    await driver.manage().setTimeouts({implicit: 100000});
    // let title = await driver.getTitle();
    // container = driver.findElement(By.xpath("//*[starts-with(@class, 'ResultList_container')]"));
    // cards = await container.findElements(By.xpath("//*[starts-with(@class, 'BpkCard_bpk-card__OGNlM')]"));
    // cards = await container.findElements(By.xpath("//*[starts-with(@class, 'PlaceCard_descriptionContainer')]"));

    cards = await driver.wait(until.elementsLocated(By.css('[class^="PlaceCard_descriptionContainer"]')));
    // cards =  await driver.findElements(By.css('[class^="PlaceCard_descriptionContainer"]'));;
    
    // const cards = await driver.findElements(By.xpath("//*[starts-with(@class, 'PlaceCard_descriptionContainer')]"));
    
    // console.log(cards);

    // cards = locateWith(By.xpath("//*[starts-with(@class, 'ResultList_container')]")).below(By.xpath("//*[starts-with(@class, 'BpkCard_bpk-card__OGNlM')]"));
    // cards = locateWith(By.xpath("//*[starts-with(@class, 'BpkCard_bpk-card__OGNlM')]")).below(By.xpath("//*[starts-with(@class, 'ResultList_container')]"));
    
    // console.log(cards);
    for (const card of cards) {
      divs = await card.findElements(By.css("div"));
      for (const div of divs) {
        // console.log());
        spans = await div.findElements(By.css("span"));
        // console.log(spans);
        for(const span of spans) {
          console.log(await span.getText());

        }
      }

      // Extract the location name
      // const locationName = await card.findElement(By.className('BpkText_bpk-text--heading-4__NDQ1Y')).getText();

      // Extract the price
      // const price = await card.findElement(By.className('BpkText_bpk-text--heading-4__NDQ1Y')).getText();

      // Extract the number of connecting flights
      // const connectingFlightsText = await card.findElement(By.className('BpkText_bpk-text--caption__NTZiO')).getText();
      // const numberOfConnectingFlights = parseInt(connectingFlightsText.split(' ')[1]);

      // Print the extracted information
      // console.log('Location: ', locationName);
      // console.log('Price: ', price);
      // console.log('Number of Connecting Flights: ', numberOfConnectingFlights);
    }
    // card = driver.findElement(By.className("BpkCard_bpk-card__OGNlM"));

     
    // let textBox = await driver.findElement(By.name('my-text'));
    // let submitButton = await driver.findElement(By.css('button'));
    // await textBox.sendKeys('Selenium');
    // await submitButton.click();
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    // await driver.quit();
  }
})();
// 终端打印如下信息