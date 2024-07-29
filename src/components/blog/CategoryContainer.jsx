import React from "react";
import "../../style/blog/CategoryContainer.css";
import Category from "./Category";
import img1 from "../../assets/image/blogpage/1.jpg";
import img2 from "../../assets/image/blogpage/2.jpeg";
import img3 from "../../assets/image/blogpage/3.png";
import img4 from "../../assets/image/blogpage/4.png";
import img5 from "../../assets/image/blogpage/5.jpeg";
import img6 from "../../assets/image/blogpage/6.png";

// Component to Display Six Category Cards
function CategoryContanier() {
  return (
    <>
      <div className="container-fluid CategoryContainer">
        <div className="row">
          <h4 className="shift-right">Categories</h4>
        </div>
        <div className="row">
          <Category title="News & Events" imgurl={img1} />
          <Category title="Feature Updates" imgurl={img2} />
          <Category title="Brand Collaboration" imgurl={img3} />
          <Category title="Life at To-Let" imgurl={img4} />
          <Category title="Internship Campaigns" imgurl={img5} />
          <Category title="Giveaway & Offers" imgurl={img6} />
        </div>
      </div>
    </>
  );
}

export default CategoryContanier;
