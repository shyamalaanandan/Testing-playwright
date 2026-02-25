import{test,Page,expect} from "@playwright/test"

test('handledialog',async({page,browser})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

   
    page.on("dialog",async(dialog)=>{
      page.getByRole('button',{name:'Click for JS Alert'}).click;
      dialog.accept;


    })



})
