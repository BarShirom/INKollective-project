import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  userName: {
    type: String,
    
    required: [true]
  },
  subject: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  }
});

const ImageModel = mongoose.model("images", ImageSchema);

export default ImageModel;
