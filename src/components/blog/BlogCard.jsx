/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import "../../style/blog/BlogCard.css";
import DateCategory from "./DateCategory";
import Views from "./Views";
import Likes from "./Likes";
import AuthorDetails from "./AuthorDetails";
import axios from "./axiosConfig";
import { useNavigate } from "react-router-dom";

//Component to display a Blog Card in all Blogs Page
const BlogCard = ({
  id,
  title,
  author,
  content,
  image,
  role,
  category,
  views,
  likes,
  date,
  intro,
  updateLikes,
  setUpdateLikes,
}) => {
  const navigate = useNavigate();

  const [isLiked, setLike] = useState(false);

  const handleLikes = async () => {
    if (isLiked === false) {
      const dataToDB = {
        id: id,
        title: title,
        author: author,
        content: content,
        image: image,
        role: role,
        category: category,
        views: views,
        likes: likes + 1,
        date: date,
        intro: intro,
      };
      await axios
        .post(`/blogs/updateLikes/${id}`, dataToDB)
        .then((response) => {
          setLike(!isLiked);
          setUpdateLikes(!updateLikes);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      const dataToDB = {
        id: id,
        title: title,
        author: author,
        content: content,
        image: image,
        role: role,
        category: category,
        views: views,
        likes: likes - 1,
        date: date,
        intro: intro,
      };
      await axios
        .post(`/blogs/updateLikes/${id}`, dataToDB)
        .then((response) => {
          setLike(!isLiked);
          setUpdateLikes(!updateLikes);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const handleViews = async () => {
    const dataToDB = {
      id: id,
      title: title,
      author: author,
      content: content,
      image: image,
      role: role,
      category: category,
      views: views + 1,
      likes: likes,
      date: date,
      intro: intro,
    };

    const resp = await axios.post(
      process.env.REACT_APP_API_URL + `blogs/updateViews/${id}`,
      dataToDB
    );
    navigate(`/showBlog/${id}`);
  };

  return (
    <div className="card" style={{ width: "30%", height: "80vh" }}>
      <img
        src={image}
        className="card-img-top"
        alt="..."
        // height="40%"
        // style={{ objectFit: "cover" }}
      />

      <div className="row">
        <div className="card-body" id="#nopadding">
          <p className="card-text">
            <DateCategory date={date} category={category} />
          </p>

          <div
            style={{
              height: "20vh",
              overflow: "hidden",
              //   textOverflow: "ellipses",
              //   whiteSpace: "nowrap",
            }}
          >
            <h5 className="card-title">{title}</h5>
            <p
              className="card-text"
              style={{
                height: "20vh",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginBottom: "16px",
              }}
            >
              {intro}
            </p>
          </div>

          <div id="readmorediv">
            <a className="readmore" onClick={handleViews}>
              Read More <TrendingFlatIcon />
            </a>
          </div>

          <div className="container-fluid m-3">
            <div className="row d-flex">
              <div className="col-7 pr-0">
                <AuthorDetails author={author} role={role} />
              </div>
              <div className="col-4 p-0 d-flex">
                <div id="viewsdiv" className="col-6 p-0 d-flex">
                  <Views views={views} />
                </div>
                <div className="col-5 p-0 d-flex">
                  <Likes
                    isLiked={isLiked}
                    // updateLikes={updateLikes}
                    likes={likes}
                    handleLikes={handleLikes}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
