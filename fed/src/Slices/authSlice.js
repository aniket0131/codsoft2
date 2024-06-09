// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     signupData: null,
//     loading :false,
//     token : localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
// }

// const authSlice  = createSlice({
//     name: 'auth',
//     initialState : initialState,
//     reducers: {
//         setSignupData(state,value) {
//             state.signupData = value.payload;
//         },
//         setLoading(state, value) {
//             state.loading = value.payload;
//         },
//         setToken(state, value) {
//             state.token = value.payload;
//         },
//     }
// })

// export const {setSignupData, setToken, setLoading} = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signupData: null,
    loading: false,
    token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
};

// Check if the token is a valid JSON string
const tokenFromLocalStorage = localStorage.getItem('token');
let parsedToken = null;
try {
    parsedToken = JSON.parse(tokenFromLocalStorage);
} catch (error) {
    console.error("Error parsing token:", error);
}
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        ...initialState,
        token: parsedToken,
    },
    reducers: {
        setSignupData(state, value) {
            state.signupData = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
        },
        setToken(state, value) {
            state.token = value.payload;
        },
    }
});

export const { setSignupData, setToken, setLoading } = authSlice.actions;
export default authSlice.reducer;
