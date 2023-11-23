import React from "react";
import { Book } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
function CategoryItem({ course }) {
  if (!course || !course.banner) {
    return null; // or handle accordingly, e.g., display a placeholder
  }
  return (
    <div>
      <div className="border rounded-lg p-2 cursor-pointer hover:border-purple-300">
        <Image
          src={course.banner.url}
          alt={course.name}
          width={1000}
          height={200}
          className="rounded-lg"
        />
        <div className="mt-2">
          <h2 className="text-[18px] md:text-[16px] font-medium  ">
            {course.name}
          </h2>
          <h2 className="text-gray-400 text-[13px]">{course.author}</h2>
          {course.totalChapters ? (
            <div className="flex items-center gap-2 mt-2">
              <Book className="h-6 w-6 text-purple-600 rounded-full bg-purple-200 p-1 cursor-pointer" />
              <h2 className="text-[12px] text-gray-400">
                {course.totalChapters} Chapters
              </h2>
            </div>
          ) : null}
          <h2 className="mt-2 text-[14px]">{course.free ? "Free" : "Paid"}</h2>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
