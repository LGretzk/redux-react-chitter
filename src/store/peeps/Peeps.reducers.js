import { createSlice } from '@reduxjs/toolkit';
import { loadPeeps, loadPeep } from './Peeps.actions';

const initialState = [];

const peepSlice = createSlice({
  name: 'peeps',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Load peeps success
      .addCase(loadPeeps.fulfilled, (state, action) => {
        return state = action.payload;
      })
      // Load peep by ID success
      .addCase(loadPeep.fulfilled, (state, action) => {
        state.push(action.payload);
      })
  }
});

export default peepSlice.reducer;