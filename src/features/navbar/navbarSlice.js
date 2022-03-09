import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  trigger: false,
  message: null,
  status: 'idle',
};

function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time)
  )
}

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toastMessage: (state, action) => {
        state.trigger = action.payload.trigger
        state.message = action.payload.message
        // sleep(2000).then(()=>{
            
        //     console.log('you can see me after 2000 milliseconds');
        // })
        // state.trigger = false
    },
  },

});

export const { toastMessage } = navbarSlice.actions;

export const selectTrigger = (state) => state.navbar.trigger;
export const selectMessage = (state) => state.navbar.message;

export default navbarSlice.reducer;
