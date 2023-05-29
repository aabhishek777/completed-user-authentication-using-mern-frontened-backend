
import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({
    isValid: false,
    user: null
},
    (builder) => {
        builder.addCase('login', (state, action) => {
            state.user = action.payload;
            state.isValid = true;

        }).addCase('load', (state, action) => {
            state.user = action.payload;
            state.isValid = true;

        })
    })