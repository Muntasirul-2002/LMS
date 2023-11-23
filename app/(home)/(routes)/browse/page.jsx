"use client";
import React, { useEffect, useState } from "react";
import CategoryFilter from "./_components/CategoryFilter";
import { getCourseList } from "@/app/_services";
import CourseLists from "./_components/CourseLists";
function Browse() {
  const [courses, setCourses] = useState([]);
  const [courseOrg, setCourseOrg] = useState();
  useEffect(() => {
    getCouses();
  }, []);

  const getCouses = () => {
    getCourseList().then((resp) => {
      console.log(resp);
      setCourses(resp.courseLists);
      setCourseOrg(resp.courseLists);
    });
  };

  const filterCourse = (category) => {
    if (category == "all") {
      setCourses(courseOrg);
      return;
    }

    const filteredList = courseOrg.filter((course) => {
      return course.tag.includes(category);
    });

    setCourses(filteredList);
  };
  return (
    <>
      <div>
        <CategoryFilter
          selectedCategory={(category) => filterCourse(category)}
        />
        {courses ? <CourseLists courses={courses} /> : null}
      </div>
    </>
  );
}

export default Browse;
