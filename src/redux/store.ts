import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import adminSlice, { resetAdmin, setAdmin } from "./admin.reducer";
import Cookies from "js-cookie";
import { REDUX_KEY } from "@constants";
import tokenSlice from "./token.reducer";
import parseJwt from "@common/utils/parse-jwt";

// https://kim0617.tistory.com/319

const cookieStorage = {
  getItem: (key: string) => {
    return Promise.resolve(Cookies.get(key) || null);
  },
  setItem: (key: string, value: string) => {
    Cookies.set(key, value, { expires: 7, secure: true });
    return Promise.resolve();
  },
  removeItem: (key: string) => {
    Cookies.remove(key);
    return Promise.resolve(); // Return a resolved promise
  },
};

// config 작성
const persistConfig = {
  key: REDUX_KEY.secureToken,
  storage: cookieStorage,
  whitelist: [REDUX_KEY.secureToken],
};

const reducers = combineReducers({
  token: tokenSlice.reducer,
  admin: adminSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/*******************************************************
 * SUBSCRIBE
 *******************************************************/
let previousToken: string | null = null;

store.subscribe(() => {
  const currentToken = store.getState().token.accessToken;

  if (currentToken !== previousToken) {
    console.log("Token has changed:", currentToken);
    previousToken = currentToken;

    if (currentToken) {
      const userInfo = parseJwt(currentToken);
      if (userInfo) {
        store.dispatch(setAdmin(userInfo));
      }
    } else {
      store.dispatch(resetAdmin({}));
    }
  }
});
