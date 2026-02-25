import{test,chromium} from "@playwright/test"

test('dropdown',async()=>{

    const chrome = await chromium.launch()
    const context = await chrome.newContext()
    const page =await context.newPage()
    await page.goto("file:///D:/Downloads/Recent%20do/Reference%20Files%20(1)/Reference%20Files/SampleForm.html");
   
   await page.evaluate(() => {
  window.scrollTo(0, document.body.scrollHeight);
});
    await page.selectOption("//select[@id='continents']",[
       { value: "Australia"},
        {index: 1},
        {label: "Asia"}
    ])

    const states=
    await page.locator("//select[@id='continents']").textContent();
    console.log(states);




})



