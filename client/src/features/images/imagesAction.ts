import { addImage, setImages, deleteImageId } from "./imagesSlice";
import axios from "axios";
import { userImageObject } from "./imagesSlice";
import { RootState, AppThunk } from '../../app/store';



export const selectCount = (state: RootState) => state.images;

export const uploadImage =
  (userImageObj: userImageObject): AppThunk =>
    async (dispatch, getState) => {

      try {
        const { data } = await axios.post("/api/images/addImage", userImageObj)
        const { image } = data
        dispatch(addImage(image));

      } catch (error) {


      }

    };

export const getAllImages =
  (): AppThunk =>
    async (dispatch, getState) => {

      try {

        const { data } = await axios.get("/api/images/getAllImages")

        const { imagesDB } = data

        dispatch(setImages(imagesDB));


        return data
      } catch (error) {


      }

    }

export const deleteImageById = (imageId: string | null | undefined): AppThunk =>
  async (dispatch, getState) => {


    try {

      const { data } = await axios.post("/api/images/deleteImage", { imageId })
      dispatch(deleteImageId(imageId));



      return {}
    } catch (error) {
      console.log(error)

    }

  }
