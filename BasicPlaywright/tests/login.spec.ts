import { chromium,test } from "@playwright/test"

test("login", async()=>{


    const test = await chromium.launch({
        headless:false
    });
    const context = await test.newContext();
    const page = await context.newPage();

    await page.
    goto("file:///D:/Downloads/Recent%20do/Reference%20Files%20(1)/Reference%20Files/SampleForm.html");

    await page.locator("//input[@name='firstname']").fill("shyamala");
  
    await page.locator("//input[@name='lastname']").fill("devi");
    


})