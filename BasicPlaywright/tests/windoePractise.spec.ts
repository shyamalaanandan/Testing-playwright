import{Page,chromium,expect,test} from "@playwright/test"


test('windowsPractise', async()=>{

      const browser = await chromium.launch();
     const context= await browser.newContext();
      const page = await context.newPage();
      await page.goto("https://www.testmu.ai/selenium-playground/window-popup-modal-demo/")

 const [array1] = await Promise.all([
context.waitForEvent('page'),
 page.getByText("Follow us On Linkedin").click(),


 ])  
 
 expect(array1).toHaveURL("https://www.linkedin.com/company/testmu-ai/")


})