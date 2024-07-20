import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    value: null
  },
  reducers: {

    setReduxUser: (state, action ) => {
      state.value =  action.payload
    },
    logoutReduxUser: (state ) => {
      state.value =  null
    },
 
  }
})

// Action creators are generated for each case reducer function
export const { setReduxUser, logoutReduxUser } = counterSlice.actions

export default counterSlice.reducer