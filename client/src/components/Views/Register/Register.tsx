import React, {  useEffect, useState } from "react"
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom"
import { registerUser } from "../../../features/user/registerUser"
import { userSelector } from "../../../features/user/userSlice"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import "./Register.css"

const Register = () =>{
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const navigate = useNavigate()
    const user = useAppSelector(userSelector)
    const dispatch = useAppDispatch()
    
    async function handleSubmit(ev:any) {
      ev.preventDefault()
      dispatch(registerUser({ email, userName, password, repeatPassword,navigate}))
    }
    
    return(
        <div className="formContainer">
            <h1>Welcome to INKollective</h1>
      <form className="form" onSubmit={handleSubmit}>
      <label>Please enter your user name</label>
        <br />
        <input
          value={userName}
          type="string"
          placeholder="User name"
          required
          onInput={(ev: any) => {
            setUserName(ev.target.value)
          }}
        /> <br />
        <label>Please enter your email</label>
        <br />
        <input
          value={email}
          type="email"
          placeholder="Email"
          required
          onInput={(ev: any) => {
            setEmail(ev.target.value)
          }}
        /> <br />
        <label>Please enter your password</label>
        <br />
        <input
          value={password}
          type="password"
          placeholder="Password"
          required
          onInput={(ev: any) => {
            setPassword(ev.target.value)
          }}
        /> <br />
        <label>Please repeat your password</label>
        <br />
        <input
          value={repeatPassword}
          type="password"
          placeholder="Password"
          required
          onInput={(ev: any) => {
            setRepeatPassword(ev.target.value)
          }}
        /> <br />
        <button type="submit">Register</button>
      </form>
        </div>
    )
}

export default Register