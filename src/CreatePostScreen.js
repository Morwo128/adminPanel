import React, { useState } from "react";
import { storage } from "./Firebase";
import "./UploadImage.css";
import axios from "axios";

function UploadImage() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleUpload = () => {
    if (image) {
      const storageRef = storage.ref();
      const imageRef = storageRef.child(image.name);
      const uploadTask = imageRef.put(image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            axios.post(
              "https://meditation-api-b34b74f3e544.herokuapp.com/api/v1/exercises/",
              {
                text: text,
                time: new Date(),
                photo: downloadURL,
                title: title,
              },
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );

            setImage("");
            setTitle("");
            setText("");
            setProgress(0);
          });
        }
      );
    }
  };

  return (
    <div className="upload-image">
      <h1>Пост</h1>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Selected"
          className="selected-image"
        />
      )}
      <input type="file" onChange={handleImageChange} />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        className="input-field"
      />
      <input
        placeholder="Text"
        value={text}
        onChange={handleTextChange}
        className="textarea-field"
      />
      <button onClick={handleUpload} className="upload-button">
        Завантажити
      </button>
      <progress value={progress} max="100" className="progress-bar" />
    </div>
  );
}

export default UploadImage;
