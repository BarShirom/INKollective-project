import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { uploadImage } from "./imagesAction";


export interface userImageObject {
  _id?: string | null
  userName: string | null;
  subject: string | null;
  imageUrl: string | undefined;
  contact: string | null;
}
export interface ImageState {
  userImages: Array<userImageObject>;
}

const initialState: ImageState = {
  userImages: [],
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: (state, action: PayloadAction<userImageObject>) => {
      state.userImages.push(action.payload);
    },
    setImages: (state, action: PayloadAction<userImageObject[]>) => {
      state.userImages = action.payload
    },
    deleteImageId: (state, action: PayloadAction<string | undefined | null>) => {


      state.userImages = state.userImages.filter((image: any) => image._id !== action.payload)


    },
  },
});


export const { addImage, setImages, deleteImageId } = imagesSlice.actions;


export default imagesSlice.reducer;
