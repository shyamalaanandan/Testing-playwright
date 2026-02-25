import{test,chromium} from "@playwright/test"

test('jquery',async({page})=>{

    await page.goto("https://jqueryui.com/autocomplete/");
     const frame= page.frameLocator("//iframe[@class='demo-frame']");

    const tag = frame.locator('#tags');
    await tag.waitFor({state: 'visible'})
    await tag.fill("J")

      await frame.locator("//ul[@id='ui-id-1']", {
        has : frame.locator("li",{
            hasText:"Java"
        })
      }).click();
     // await page.waitForTimeout(4000);


})