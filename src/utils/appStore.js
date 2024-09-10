import { configureStore } from "@reduxjs/toolkit";
import resultSlice from "./resultSlice";

const appStore = configureStore({
  reducer: { result: resultSlice },
});
export default appStore;
