import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import amazonReducer from "./amazonCreateSlice";
import amazonSaga from "./amazonSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    amazon: amazonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(amazonSaga);

export default store;
