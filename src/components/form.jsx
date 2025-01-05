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
        <img src={camera} alt="camera" width={250} />
        <div>
          <label
            htmlFor="imageUpload"
            style={{
              cursor: "pointer",
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            CAMERA
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            capture="environment"
            onChange={handleImageChange}
            style={{ display: "none" }} // Hides the default file input
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
