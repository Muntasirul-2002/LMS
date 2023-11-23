import React from "react";

function Videoplayer() {
  return (
    <div className="border rounded-lg p-3 lg:w-[500px]">
      <h2 className="text-gray-400 mb-3">Couese Preview</h2>
      <video width="500" height="300" controls controlsList="nodownload">
        <source
          src="https://youtu.be/-mJFZp84TIY?si=5RxSqcMeobiHdjHO"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Videoplayer;
