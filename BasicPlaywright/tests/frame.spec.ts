import{test,expect} from "@playwright/test"

test("frame testing",async({page})=>{

    await page.goto("https://letcode.in/frame");
    const noFrames=page.frames();
    console.log("no of frames "+ noFrames.length) 
    const myframe = page.frameLocator('#firstFr').locator('input[name="fname"]')
    
   await myframe.fill('shyamala');
   await expect(myframe).toHaveValue('shyamala');

})

