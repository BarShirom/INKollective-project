import ImageModel from "../models/imageModel";


export async function getAllImages(req, res) {
  try {
    const imagesDB = await ImageModel.find();
    res.send({ imagesDB });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export async function uploadImage(req, res) {
  try {

    const imageObject = req.body;
    const image = await new ImageModel(imageObject).save();

    res.send({ image });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export async function deleteImage(req, res) {
  try {
    console.log(req)
    const imageId = req.body.imageId
    await ImageModel.deleteOne({ imageId: imageId })

    res.send({ success: true })
  } catch (error) {
    res.status(500).send({ error: error.message });
  }

}
