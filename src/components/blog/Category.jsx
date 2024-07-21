import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import "../../style/blog/Category.css";

// Component to Display Category Card
const Category = ({ title, imgurl }) => {
  return (
    <div id="categoryCard" className="card" style={{ width: "25%" }}>
      <img src={imgurl} id="categoryimg" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text d-flex">
          {title}{" "}
          <a className="arrow" href="#">
            <TrendingFlatIcon style={{ color: "#5aa79f" }} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Category;
