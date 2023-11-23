import React from "react";
import { Book } from "lucide-react";
function CourseDetails({ courseDetail }) {
  if (!courseDetail || Object.keys(courseDetail).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-5 p-5 rounded-lg border lg:w-[500px]">
      <h2 className="text-[17px] font-medium ">{courseDetail.name}</h2>
      <div className="flex items-center gap-2 mt-2">
        <Book className="h-6 w-6 text-purple-600 rounded-full bg-purple-200 p-1 cursor-pointer" />
        <h2 className="text-[12px] text-gray-400">
          {courseDetail.totalChapters} Chapters
        </h2>
      </div>
      <p className="line-clamp-4 mt-3 text-gray-500">
        {courseDetail.description}
      </p>
    </div>
  );
}

export default CourseDetails;
