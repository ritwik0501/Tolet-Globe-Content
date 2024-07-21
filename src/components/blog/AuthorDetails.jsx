import React from "react";
import avatar from "../../assets/image/blog/avatar.png";
import "../../style/blog/AuthorDetails.css";

// Component to Display Author Details like Username, Role, and User Img Icon
function AuthorDetails({ author, role }) {
  return (
    <div className="author-detail">
      <div className="row d-flex">
        <div className="col-2 mr-4 p-0 pt-1">
          <img className="rounded-circle" src={avatar} width="30px" alt="..." />
        </div>
        <div className="col-10 p-0">
          <div className="row" id="author">
            {author}
          </div>
          <div className="row" id="role">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorDetails;
