import { createSlice } from "@reduxjs/toolkit";

const beneficiarySlice = createSlice({
  name: 'beneficiary',
  initialState: [],
  reducers: {
    addBeneficiary: (state, action) => {
      console.log(`### State:`, state,  'and Action payload: ', action)
      state.push(action.payload)
      console.log('State after update: ', state, 'action was: ', action);
    },
    editBeneficiary: (state, action) => {
      console.log(`### State: ${state} and Action payload: ${action.payload}`)
    },
    deleteBeneficiary: (state, action) => {
      console.log(`### State: ${state} and Action payload: ${action.payload}`)
    }
  }
})

export const {addBeneficiary, editBeneficiary, deleteBeneficiary} = beneficiarySlice.actions
export default beneficiarySlice.reducer