import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addImage } from "../../../features/images/imagesSlice";
import { userImageObject } from "../../../features/images/imagesSlice";
import { uploadImage } from "../../../features/images/imagesAction";
import { AppDispatch } from "../../../app/store";
import UserImages from "./UserImages";
import "./MyProfile.css"

const MyProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [contact, setContact] = useState("");
  const getUserImageArray = useSelector((state: any) => state);
  if (localStorage.getItem("userName")?.length === 0) navigate("/login");

  async function handleSubmit(ev: any) {
    ev.preventDefault();

    const userImageObj: userImageObject = {
      userName: localStorage.getItem('userName'),
      subject: subject,
      imageUrl: imageUrl,
      contact: contact,
    };

    dispatch(uploadImage(userImageObj))


  }

  return (
    <div className="myProfile">
      <form onSubmit={handleSubmit} className="uploadPhotoForm">
        <label className="label">Upload new tattoo</label>
        <br />
        <input className="subjectInput"
          type="string"
          placeholder="Subject"
          required
          onInput={(ev: any) => {
            setSubject(ev.target.value);
          }}
        ></input>
        <br />
        <input className="imageInput"
          type="string"
          placeholder="Image url"
          required
          onInput={(ev: any) => {
            setImageUrl(ev.target.value);
          }}
        ></input>
        <br />
        <input className="contactInput"
          type="string"
          placeholder="Contact details"
          required
          onInput={(ev: any) => {
            setContact(ev.target.value);
          }}
        ></input>
        
        <button className="submitBtn" type="submit">Submit</button>
      </form>
      <UserImages />
    </div>
  );
};

export default MyProfile;
