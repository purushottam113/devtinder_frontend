import { createSlice } from "@reduxjs/toolkit";


const requestsSlice = createSlice({
    name: "requests",
    initialState: null,
    reducers: {
        addRequests: (state, action) => {
            return action.payload
        },
        removeRequests: (state, action) => {
            const arrayRequest = state.filter((r)=>{r._id !== action.payload})
            return arrayRequest;
        }
    },
})

export const {addRequests, removeRequests} = requestsSlice.actions;
export default requestsSlice.reducer;