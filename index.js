const puppeteer = require('puppeteer');

(async()=>{
    const browser = await puppeteer.launch({headless:false});
    const page =await browser.newPage();
    await page.goto('https://web.whatsapp.com/');
    await page.waitFor(2000);
    localStorage.setItem()
    page.waitForXPath('/html/body/div[1]/div/div/div[3]/div/div[2]/div[1]/div/div/div[14]/div/div/div[2]')
    .then(async()=>{
        await page.click('#pane-side > div:nth-child(1) > div > div > div:nth-child(1) > div > div > div._2kHpK');
        page.waitFor(2000)
        await page.click('#main > footer > div._3ee1T._1LkpH.copyable-area > div._3uMse');
        page.waitFor(2000)
        page.type('#main > footer > div._3ee1T._1LkpH.copyable-area > div._3uMse > div > div._3FRCZ.copyable-text.selectable-text','Hi. How are you? ').then(()=>{
            page.click('#main > footer > div._3ee1T._1LkpH.copyable-area > div:nth-child(3)');
          });
            // await page.type('.selectable-text','this is for testing purpose only. sent from nodejs program')
           await page.waitFor(2000)
                
            
           await browser.close();
      
        // #main > footer > div._3ee1T._1LkpH.copyable-area > div._3uMse > div > div._3FRCZ.copyable-text.selectable-text
    })
})();