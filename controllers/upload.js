const Image = require("../models/Images");

const upload = async (req, res) => {
  const { title, url } = req.body;
  try {
    const newImage = new Image({ title, url });
    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save image' });
  }
};

module.exports = {upload};