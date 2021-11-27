import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message"

import AuthService from "../services/auth.service"

if (typeof window !== "undefined") {
	const user = JSON.parse(localStorage.getItem("user"))

} else {
	const user = undefined
}
export const register = createAsyncThunk("auth/register", 
	async ({userName, fullName, phone, address, zipCode, country, email, password }, thunkApi) => {
		try {
			const response = await AuthService.register({userName, fullName, phone, address, zipCode, country, email, password });
			thunkApi.dispatch(setMessage(response.data.message));
			return response.data
		} catch (error) {
			const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString();
			thunkApi.dispatch(setMessage(message));
			return thunkApi.rejectWithValue();
		}
	})

export const login = createAsyncThunk("auth/login", 
	async ({userName, email, password }, thunkApi) => {
		try {
			const response = await AuthService.login({userName, email, password });
			thunkApi.dispatch(setMessage(response.data.message));
			return response.data
		} catch (error) {
			const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString();
			thunkApi.dispatch(setMessage(message));
			return thunkApi.rejectWithValue();
		}
	})

export const logout = createAsyncThunk("auth/logout", 
	async () => {
			 await AuthService.logout();
		
	})

const initialState = "user" ? { isLoggedIn: true, user: "user"} : { isLoggedIn: false, user: null}

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: {
		[register.fulfilled]: (state, action) => {
			state.isLoggedIn = false
		},
		[register.rejected]: (state, action) => {
			state.isLoggedIn = false
		},
		[login.fulfilled]: (state, action) => {
			state.isLoggedIn = true
			state.user = action.payload.user;
		},
		[login.rejected]: (state, action) => {
			state.isLoggedIn = false
			state.user = null;
		},
		[logout.fulfilled]: (state, action) => {
			state.isLoggedIn = false
			state.user = null;
		},
	}
})

const { reducer } = authSlice;