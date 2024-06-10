import { configureStore } from '@reduxjs/toolkit'
import beneficiaryReducer from './slices/BeneficiarySlice'
import { loadState, saveState } from './localStorage';

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    beneficiary: beneficiaryReducer
  },
  preloadedState
})

store.subscribe(() => {
  saveState(store.getState());
});

export default store