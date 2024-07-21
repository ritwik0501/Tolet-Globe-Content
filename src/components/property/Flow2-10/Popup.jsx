import React, { useRef } from "react"

const Popup = ({ onClose }) => {
  const modelRef = useRef()

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose()
    }
  }
  return (
    <div
      ref={modelRef}
      onClick={closeModel}
      className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className=" bg-black w-3/5  p-4 rounded-lg">
        <p className="text-left pl-4 text-white">Share your experience</p>
        <textarea
          name="message"
          id=""
          placeholder="Leave your comment...."
          className="resize-none w-full border p-2 border-gray-300 rounded-lg"
        ></textarea>
        <div
          className="rounded-lg mt-3 w-1/5 right-0"
          style={{ backgroundColor: "#40B5A8" }}
        >
          <button
            className="flex justify-center w-full p-2 font-semibold text-white"
            onClick={onClose}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup
