import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cvApi } from "./queries/cv-api-query";
import turnstileReducer from "./reducers/turnstile";

export const store = configureStore({
  reducer: {
    [cvApi.reducerPath]: cvApi.reducer,
    turnstile: turnstileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cvApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// optional: typed thunk helper
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
