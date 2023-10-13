import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'redux/operations';
import { handlePending, handleRejected } from './helpers';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [action.payload, ...state.items];
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(el => el.id !== action.payload.id);
      })

      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
  // extraReducers: {
  //   [fetchContacts.pending](state) {
  //     state.isLoading = true;
  //   },
  // [fetchContacts.fulfilled](state, action) {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.items = action.payload;
  // },
  // [fetchContacts.rejected](state, action) {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // },
  // },
  //reducers: {
  //6 дз
  // addContact: (state, action) => {
  //   state.items.unshift({
  //     id: nanoid(),
  //     name: action.payload.name,
  //     number: action.payload.number,
  //   });
  // },
  // deleteContact: (state, action) => {
  //   state.items = state.items.filter(el => el.id !== action.payload);
  // },
  //7 дз без креейт асинк санк
  // fetchingInProgress(state) {
  //   state.isLoading = true;
  // },
  // fetchingSuccess(state, action) {
  // state.isLoading = false;
  // state.error = null;
  // state.items = action.payload;
  // },
  // fetchingError(state, action) {
  // state.isLoading = false;
  // state.error = action.payload;
  // },
  //},
});

export default contactSlice.reducer;
