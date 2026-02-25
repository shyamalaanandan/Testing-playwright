import {test as base} from "@playwright/test";

import { LoginPage } from "../pages/login";
    
import { BrowserAC } from "../pages/browserAC";

type PageFixtures = {
  loginPage: LoginPage;

  browserAc: BrowserAC;

};
    export const test=base.extend< PageFixtures >({
        loginPage:async({page},use)=>{
            await use(new LoginPage(page));
        },
    browserAc:async({page},use)=>{
        await use(new BrowserAC(page));
    },
})




