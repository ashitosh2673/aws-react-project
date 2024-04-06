import { put, call, takeEvery } from "redux-saga/effects";

import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
} from "./amazonCreateSlice";

function* fetchProducts() {
  try {
    const response = yield call(fetch, "https://fakestoreapi.com/products");
    const data = yield response.json();
    yield put(fetchProductsSuccess(data));
  } catch (error) {
    yield put(fetchProductsError(error.message));
  }
}

export default function* amazonSaga() {
  yield takeEvery(fetchProductsRequest, fetchProducts);
}
