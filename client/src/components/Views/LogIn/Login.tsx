import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
import { loginUser } from "../../../features/user/loginUser";
import { userSelector } from "../../../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  async function handleSubmit(ev: any) {
    ev.preventDefault();
    dispatch(loginUser({ email, password, navigate }))
  }
  return (
    <div className="formContainer">
      <h1>Welcome to INKollective</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="emailLabel">Please enter your email</label>
        <br />
        <input
          value={email}
          type="email"
          placeholder="email"
          required
          onInput={(ev: any) => {
            setEmail(ev.target.value);
          }}
        />{" "}
        <br />
        <label className="passwordLabel">Please enter your password</label>
        <br />
        <input
          value={password}
          type="password"
          placeholder="password"
          required
          onInput={(ev: any) => {
            setPassword(ev.target.value);
          }}
        />{" "}
        <br />
        <button type="submit">Login</button>
        <button onClick={() => navigate("/register")} type="submit">
          Register
        </button>
      </form>
      <p>OR</p>
      <button onClick={() => navigate("/home")} type="submit">
          Enter as a guest
        </button>
    </div>
    
  );
};

export default Login;
