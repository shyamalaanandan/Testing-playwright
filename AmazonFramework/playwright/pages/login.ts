import{Page,Browser,test, Locator,expect} from "@playwright/test"

import fs from "fs";
import path from "path";
import { BaseTest } from "./BaseTest";

export class LoginPage extends BaseTest{

    
    readonly userid:Locator;
  
    readonly password:Locator;
    readonly signButton:Locator;
  

    constructor(page:Page){

        super(page);
        this.userid=page.getByPlaceholder('Username');
        this.password=page.getByPlaceholder('Password');

        this.signButton=page.locator('#login-button');
        
          }



    async load(url:string){
        await test.step('loading page',async()=>{
            await this.page.goto(url)
           
            
        });
    }

    async wait(){

        await test.step('waiting for you',async()=>{

            await this.userid.waitFor({state:"visible"})

        });
    }

    async homepage(username:string,password:string){  
        await test.step('login',async()=>{
            await this.userid.fill(username)
           
            await this.password.fill(password)


  await this.signButton.click()

            
        })
    }
    

    async alertBox(){

        await test.step('alertbox',async()=>{
            this.page.on('dialog',async(dialog)=>{
                await dialog.accept();
            });

        })
    }





}