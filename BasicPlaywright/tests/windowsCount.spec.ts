import{test,expect} from "@playwright/test"

test("windowscount", async({page,browser,context})=>{

    await page.goto("https://www.testmu.ai/selenium-playground/window-popup-modal-demo/")

    const [array2] = await Promise.all([

          context.waitForEvent("page"),
        

          page.getByText("Follow us On Linkedin").click()

    ]);
    console.log(array2.url())

    expect
    const count= array2.context().pages()
    console.log(count)
})
