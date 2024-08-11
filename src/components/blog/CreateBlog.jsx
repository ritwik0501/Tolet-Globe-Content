/* eslint-disable no-unused-vars */
import React, { useState, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./axiosConfig";
import "../../style/blog/CreateBlog.css";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import JoditEditor from "jodit-react";

// Component to Display Create Blog Form

function CreateBlog() {
  const navigate = useNavigate();

  // const editor = useRef(null);

  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    author: "",
    role: "Content Creator",
    title: "",
    category: "News & Events",
    intro: "",
    image: "",
    content: "",
  });

  const handleReset = () => {
    setFormData({
      author: "",
      role: "Content Creator",
      title: "",
      category: "News & Events",
      intro: "",
      image: null,
      content: "",
    });
    fileInputRef.current.value = "";
  };

  const handleChange = (evt) => {
    console.log(formData);
    setFormData((prev) => ({
      ...prev,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleFileChange = (evt) => {
    setFormData((prev) => ({ ...prev, image: evt.target.files[0] }));
  };

  const handleContentChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      content: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault(); // Prevent the default form submission
    // const response = await axios.post("/getUserData");

    // let { username, role } = response.data;
    // if (role === "content-creator") {
    //   role = "Content Creator";
    // } else if (role === "admin") {
    //   role = "Admin";
    // }

    const dataToDB = {
      ...formData,
      // author: username,
      // role: role,
      views: 0,
      likes: 0,
      date: new Date(),
    };

    console.log(dataToDB);
    const response2 = await axios.post("/blogs/new", dataToDB, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log(response2);
    navigate("/blog");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h3 className="text-center createBlog pt-5 pb-1">Create Blog</h3>

          <div className="col-6 offset-3">
            <form
              className="custom-form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className="form-group my-3">
                <label htmlFor="blog-author" className="custom-label mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control custom-input"
                  id="blog-author"
                  placeholder="Enter your name!"
                  value={formData.author}
                  name="author"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group my-3">
                <label htmlFor="blog-role" className="custom-label my-2">
                  Role
                </label>
                <select
                  className="form-control custom-input"
                  id="blog-role"
                  value={formData.role}
                  name="role"
                  onChange={handleChange}
                >
                  <option value="Content Creator">Content Creater</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <div className="form-group my-3">
                <label htmlFor="title" className="custom-label mb-2">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control custom-input"
                  id="title"
                  placeholder="Title goes here!"
                  value={formData.title}
                  name="title"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group my-3">
                <label htmlFor="blog-category" className="custom-label my-2">
                  Category
                </label>
                <select
                  className="form-control custom-input"
                  id="blog-category"
                  value={formData.category}
                  name="category"
                  onChange={handleChange}
                >
                  <option value="News & Events">News & Events</option>
                  <option value="Feature Updates">Feature Updates</option>
                  <option value="Brand Collaboration">
                    Brand Collaboration
                  </option>
                  <option value="Life at To-Let">Life at To-Let</option>
                  <option value="Internship Campaigns">
                    Internship Campaigns
                  </option>
                  <option value="Giveaway & Offers">Giveaway & Offers</option>
                </select>
              </div>

              <div className="form-group my-3">
                <label htmlFor="blog-intro" className="custom-label my-2">
                  Intro
                </label>
                <input
                  type="text"
                  className="form-control custom-input"
                  id="blog-intro"
                  placeholder="Brief Introduction!"
                  value={formData.intro}
                  name="intro"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="image"
                  // id="file-label"
                  className="custom-label my-2 d-block"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  className="form-control custom-input"
                  id="image"
                  name="image"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="blog-content" className="custom-label my-3">
                  Content
                </label>
                <ReactQuill
                  onChange={handleContentChange}
                  className="custom-quill-editor custom-input"
                  modules={CreateBlog.modules}
                  formats={CreateBlog.formats}
                  id="blog-content"
                />
                {/* <JoditEditor
                  ref={editor}
                  value={formData.content}
                  name="content"
                  onChange={handleContentChange}
                  id="blog-content"
                /> */}
              </div>

              <div className="my-3 d-flex justify-content-between">
                <button type="submit" className="btn btn-primary toLetButton">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-primary toLetButton"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

CreateBlog.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    [("bold", "italic", "underline", "strike", "blockquote")],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

CreateBlog.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default CreateBlog;
