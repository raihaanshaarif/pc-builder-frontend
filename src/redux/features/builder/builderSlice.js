import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  components: [],
};

export const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      const exist = state.components.find(
        (component) => component.category === action.payload.category,
      );
      if (!exist) {
        state.components.push(action.payload);
        toast.success('Successfully Added to Builder!');
      } else {
        toast.error('This component is already in the builder!');
      }
    },
    deleteFromBuilder: (state, action) => {
      state.components = state.components.filter(
        (component) => component.category !== action.payload.category,
      );
      toast.success('Component removed from builder.');
    },
    clearBuilder: (state) => {
      state.components = []; // Resets the components array
    },
  },
});

export const { addToBuilder, deleteFromBuilder, clearBuilder } = builderSlice.actions;

export default builderSlice.reducer;
