
import {test,Page,expect} from "@playwright/test"

test('Testing Frames',async({page})=>{

   await page.goto("https://letcode.in/frame");
   
   const count=page.frames();
   console.log(count.length);
   const myFrame=page.frameLocator('#firstFr').locator('input[name="fname"]');
   await myFrame.fill('shyamala');
   await expect(myFrame).toHaveValue('shyamala');




})






