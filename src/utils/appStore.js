import { configureStore } from "@reduxjs/toolkit";
import sliceStore from "./sliceStore";

const appStore = configureStore({
    reducer : {
        cart : sliceStore
    }
    
})

export default appStore