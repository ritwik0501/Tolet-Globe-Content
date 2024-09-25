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
  const [loader, setLoader] = useState(false);
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
    try {
      setLoader(true);
      const response2 = await axios.post("/blogs/new", dataToDB, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoader(false);
      alert("Blog Posted Successfully");
    } catch (e) {
      console.log(e);
      setLoader(false);
    }

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
                {loader && (
                  <button
                    disabled
                    type="button"
                    class="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#1C64F2"
                      />
                    </svg>
                    Creating Blog...
                  </button>
                )}
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
