/* eslint-disable no-unused-vars */
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FaHeart, FaRegHeart, FaLongArrowAltRight } from "react-icons/fa";

function Likes({ isLiked, likes, handleLikes }) {
  return (
    <>
      <span className="mt-1 pr-2" onClick={handleLikes}>
        {isLiked ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-[#3cbcb1]" />
        )}
      </span>

      <span> </span>
      <span style={{ color: "#9da2af" }}>{likes}</span>
    </>
  );
}

export default Likes;
