import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { User } from "./userType"

interface RegisterPayload {
    email: string,
    userName: string,
    password: string,
    repeatPassword: string,
    navigate: any
}

export const registerUser = createAsyncThunk<User, RegisterPayload>(
    'get-user-by-cookie',
    async({email, userName, password, repeatPassword, navigate}, thunkApi) => {
        try {
            const data  = await axios.post("/api/users/register", {email, userName, password,repeatPassword })
            if(!data) throw new Error("Couldn't receive data from axios GET '/get-user-by-cookie' from: userAPI ")
            navigate("/home")
            return data            
        } catch (error:any) {
            return thunkApi.rejectWithValue({
                error: error.message,
                message: error.message,
              })
        }
    }
)
