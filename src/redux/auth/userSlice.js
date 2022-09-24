import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StorageKeys from "../../constants/storage-keys";
import userApi from "../../api/userApi";

export const register = createAsyncThunk("user/register", 
    async (payload) => {            // payload is the data from the form
        //Call API to register
        const data = await userApi.register(payload);
    
        // console.log(data);

        //Save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
        // return user data
        return data.user;
    }
);

export const login = createAsyncThunk("user/login", 
    async (payload) => {            
        const data = await userApi.login(payload);
       
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
        
        return data.user;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
        showForm: false,
    },
    reducers: {
        logout(state,action) {
            // clear local storage
            localStorage.removeItem(StorageKeys.USER);
            localStorage.removeItem(StorageKeys.TOKEN);
            state.current = {};
        },
        showForm(state,action) {
            state.showForm = true;
        },
        hideForm(state,action) {
            state.showForm = false;
        }  
    },
    extraReducers: {        //Cập nhật state khi có action được dispatch
        // 'user/register/fulfilled': (state, action) => {
        [register.fulfilled]: (state, action) => {      
            state.current = action.payload;         //action.payload is return value of the thunk
        },
        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        }
    }
});

const { actions, reducer } = userSlice;
export const { logout,showForm,hideForm } = actions;

export default reducer;
