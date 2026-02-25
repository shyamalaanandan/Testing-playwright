import {  test,expect,chromium, BrowserContext, Browser,Page} from "@playwright/test"
//parent window to chile window 

test("window", async()=>{


    const browser:Browser = await chromium.launch({
        headless:false
    });
    const browserContext : BrowserContext = await browser.newContext();
    const page : Page = await browserContext.newPage();
     await page.goto("https://www.testmu.ai/selenium-playground/window-popup-modal-demo/")
     //console.log(page.url());



const [array1] : [Page,void]=await Promise.all([

 browserContext.waitForEvent("page"),
 page.getByText("Follow us On Linkedin").click()
 

]);
console.log(array1.url());



     
})

//windows count 


