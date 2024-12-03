import React from "react";
import { useState } from "react";

const addImage = () => {
  //create a state for the image
  const [image, setImage] = useState("");

  //create a function to call when submitting a form
  function handleImage(e) {
    //stop from reloading the page
    e.preventDefault();
    //create a form data to send to Cloudinary
    const formData = new FormData();
    //using the .append method to add properties to the form data
    formData.append("file", image);
    //upload_preset is a specific name and the its value comes from the cloudinary dashboard
    formData.append("upload_preset", wandering - quill);
    axios
      .post("https://api.cloudinary.com/v1_1/dp63r9768/image/upload", formData)
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          addImage(event.target.files);
        }}
      />
    </div>
  );
};

export default addImage;
