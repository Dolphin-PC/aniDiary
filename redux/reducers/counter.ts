import {createSlice} from '@reduxjs/toolkit';

const initState = { value: 0 };

const counterSlice = createSlice({
    initialState: initState,
    name: 'counter',
    reducers: {
        increment (state) { state.value += 1 },
        decrement (state) { state.value -= 1 },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
