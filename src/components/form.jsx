import camera from "../assets/camera.svg";

import React, { useState } from "react";

const PictureForm = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (image) {
      // Process the image (e.g., send it to a server)
      console.log("Image ready to upload:", image);
    } else {
      alert("Please select an image first.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <img src={camera} alt="camera" />
        <div>
          <label htmlFor="imageUpload">📷 Take a Picture:</label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            capture="environment"
            onChange={handleImageChange}
          />
        </div>
      </div>
      {preview && (
        <div>
          <p>Preview:</p>
          <img
            src={preview}
            alt="Preview"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PictureForm;
