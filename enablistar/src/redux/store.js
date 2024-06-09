import { configureStore } from '@reduxjs/toolkit'
import beneficiaryReducer from './slices/BeneficiarySlice'

export const store = configureStore({
  reducer: {
    beneficiary: beneficiaryReducer
  }
})
