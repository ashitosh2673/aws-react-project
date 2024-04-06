import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
  cart: [],
};

const amazonCreateSlice = createSlice({
  name: "amazon-ecommerce",
  initialState,
  reducers: {
    fetchProductsRequest: (state) => {
      state.loading = true;
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addToCart: (state, action) => {
      const productItem = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === productItem.id
      );

      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += 1;
      } else {
        state.cart.push({
          ...productItem,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      const productItem = action.payload;
      const existingProduct = state.cart?.find(
        (item) => item.id === productItem.id
      );

      state.cart =
        existingProduct.quantity > 1
          ? state.cart.map((item) =>
              item.id === productItem.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
          : state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
  addToCart,
  removeFromCart,
} = amazonCreateSlice.actions;

export default amazonCreateSlice.reducer;
