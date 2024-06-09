import { createSlice } from "@reduxjs/toolkit";

const beneficiarySlice = createSlice({
  name: 'beneficiary',
  initialState: [],
  reducers: {
    addBeneficiary: (state, action) => {
      state.push(action.payload)
    },
    editBeneficiary: (state, action) => {
      const {selectedIndex, newItem} = action.payload
      if (selectedIndex >= 0 && selectedIndex < state.length) {
        state[selectedIndex] = { ...state[selectedIndex], ...newItem };
      }
    },
    deleteBeneficiary: (state, action) => {
      const {selectedIndex} = action.payload
      state.splice(selectedIndex, 1)
    }
  }
})

export const {addBeneficiary, editBeneficiary, deleteBeneficiary} = beneficiarySlice.actions
export default beneficiarySlice.reducer