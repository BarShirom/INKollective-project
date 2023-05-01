import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { User } from "./userType"


interface LoginPayload {
    email: string,
    password: string,
    navigate: any
}

export const loginUser = createAsyncThunk<User, LoginPayload>(
    'get-user-by-cookie',
    async ({ email, password, navigate }, thunkApi) => {
        try {
            const data = await axios.post("/api/users/login", { email, password })
            if (!data) throw new Error("Couldn't receive data from axios GET '/get-user-by-cookie' from: userAPI ")
            navigate("/home")
            localStorage.setItem('userName', email)

            return data
        } catch (error: any) {
            return thunkApi.rejectWithValue({
                error: error.message,
                message: error.message,
            })
        }
    }
)

