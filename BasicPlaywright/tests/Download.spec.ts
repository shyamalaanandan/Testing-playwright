import{test,Page} from "@playwright/test"
import path from "node:path";

test('download checking',async({page})=>{

    await page.goto("file:///D:/Downloads/Recent%20do/Reference%20Files%20(1)/Reference%20Files/SampleForm.html");
    
    await page.getByLabel('Profile Picture').setInputFiles(path.join('D:/Playwright/git.txt'));
   // await page.getByLabel('').setInputFiles(path.join(''));




})