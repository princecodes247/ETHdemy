import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "./services/cryptoApi";
import { userApi } from "./services/userApi";
import { cryptoNewsApi } from "./services/cryptoNewsApi";

// import authReducer from "./slices/auth";
// import messageReducer from "./slices/message";

const reducer = {
	[cryptoApi.reducerPath]: cryptoApi.reducer,
  [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
}

export default configureStore({
  reducer: reducer,
  devTools: true
});
